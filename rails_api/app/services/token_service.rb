require "digest"

class TokenService
  ACCESS_TOKEN_TTL = 24.hours
  REFRESH_TOKEN_TTL = 30.days

  def self.issue_for(user)
    access_token = JwtService.encode({ user_id: user.id }, ACCESS_TOKEN_TTL.from_now)
    refresh_token = generate_refresh_token(user)

    {
      access_token: access_token,
      refresh_token: refresh_token,
      token_type: "Bearer",
      expires_in: ACCESS_TOKEN_TTL.to_i
    }
  end

  def self.rotate(refresh_token)
    token = RefreshToken.find_by(token_digest: digest(refresh_token))
    return nil if token.nil? || token.revoked_at.present? || token.expires_at <= Time.current

    token.revoke!
    issue_for(token.user)
  end

  def self.revoke(refresh_token)
    token = RefreshToken.find_by(token_digest: digest(refresh_token))
    return false if token.nil? || token.revoked_at.present?

    token.revoke!
    true
  end

  def self.generate_refresh_token(user)
    raw = SecureRandom.hex(32)
    RefreshToken.create!(
      user: user,
      token_digest: digest(raw),
      expires_at: REFRESH_TOKEN_TTL.from_now
    )
    raw
  end

  def self.digest(raw)
    Digest::SHA256.hexdigest(raw)
  end
end

class JwtService
  SECRET = ENV.fetch("JWT_SECRET", "dev_secret")

  def self.encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    payload[:iat] ||= Time.current.to_i
    JWT.encode(payload, SECRET, "HS256")
  end

  def self.decode(token)
    raise StandardError, "Missing token" if token.blank?

    decoded = JWT.decode(token, SECRET, true, { algorithm: "HS256" })
    decoded.first
  end
end

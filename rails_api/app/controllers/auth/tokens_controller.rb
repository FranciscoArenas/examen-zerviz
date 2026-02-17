module Auth
  class TokensController < ApplicationController
    skip_before_action :authenticate_request

    def refresh
      tokens = TokenService.rotate(params[:refresh_token])
      if tokens
        render json: tokens
      else
        render json: { error: "Invalid refresh token" }, status: :unauthorized
      end
    end

    def revoke
      if TokenService.revoke(params[:refresh_token])
        head :no_content
      else
        render json: { error: "Invalid refresh token" }, status: :unprocessable_entity
      end
    end

    def verify
      token = params.dig(:user, :auth_token) || params[:auth_token]
      payload = JwtService.decode(token)
      render json: { valid: true, payload: payload }
    rescue StandardError
      render json: { valid: false, error: "Unauthorized" }, status: :unauthorized
    end
  end
end

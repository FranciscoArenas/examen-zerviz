class ApplicationController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    return if public_endpoint?

    token = request.headers["Authorization"]&.split(" ")&.last
    payload = JwtService.decode(token)
    @current_user = User.find(payload["user_id"])
  rescue StandardError
    render json: { error: "Unauthorized" }, status: :unauthorized
  end

  def public_endpoint?
    controller_name == "health" ||
      (controller_path == "auth/sessions" && action_name == "create") ||
      (controller_path == "auth/registrations" && action_name == "create") ||
      (controller_path == "auth/tokens" && action_name.in?(["refresh", "revoke"]))
  end
end

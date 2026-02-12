module Auth
  class SessionsController < ApplicationController
    skip_before_action :authenticate_request

    def create
      user = user_repository.find_by_email(params[:email])
      if user&.authenticate(params[:password])
        tokens = TokenService.issue_for(user)
        render json: tokens
      else
        render json: { error: "Invalid credentials" }, status: :unauthorized
      end
    end

    def user_repository
      @user_repository ||= UserRepository.new
    end
  end
end

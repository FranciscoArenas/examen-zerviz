module Auth
  class RegistrationsController < ApplicationController
    skip_before_action :authenticate_request

    def create
      user = user_repository.create(user_params)
      if user.persisted?
        tokens = TokenService.issue_for(user)
        render json: tokens, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end

    def user_repository
      @user_repository ||= UserRepository.new
    end
  end
end

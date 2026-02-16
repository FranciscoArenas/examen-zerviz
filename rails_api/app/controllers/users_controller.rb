class UsersController < ApplicationController
  def create
    user = User.new(user_create_params)

    if user.save
      render json: { user: user.as_json(except: :password_digest) }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_create_params
    params.require(:user).permit(
      :username, :email, :password, :first_name, :last_name, :role, :status,
      :bio, :company, :location, :phone_number, :website, :github_handle,
      :two_factor_enabled, :auth_token
    )
  end
end

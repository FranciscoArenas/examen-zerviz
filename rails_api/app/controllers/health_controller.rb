class HealthController < ApplicationController
  skip_before_action :authenticate_request

  def show
    render json: { status: "ok", time: Time.current }
  end
end

require_relative "application"

Rails.logger = ActiveSupport::Logger.new($stdout)
RailsApi::Application.initialize!

RailsApi::Application.configure do
  config.cache_classes = true
  config.eager_load = false
  config.consider_all_requests_local = true
  config.logger = ActiveSupport::Logger.new($stdout)
  config.log_level = :warn
  config.public_file_server.enabled = true
end

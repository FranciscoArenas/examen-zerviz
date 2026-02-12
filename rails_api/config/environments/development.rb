RailsApi::Application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local = true
  config.logger = ActiveSupport::Logger.new($stdout)
  config.log_level = :debug
  config.public_file_server.enabled = true
  config.hosts.clear
end

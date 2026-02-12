require "rails"
require "active_support/railtie"
require "active_support/parameter_filter"
require "active_record/railtie"
require "action_controller/railtie"
require "active_model/railtie"
require "active_job/railtie"

Bundler.require(*Rails.groups)

module RailsApi
  class Application < Rails::Application
    config.load_defaults 7.1
    config.api_only = true
    config.logger = ActiveSupport::Logger.new($stdout)
    config.hosts.clear
    config.middleware.delete ActionDispatch::HostAuthorization

    config.autoload_paths << Rails.root.join("app/services")
    config.autoload_paths << Rails.root.join("app/repositories")

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins "*"
        resource "*",
                 headers: :any,
                 methods: %i[get post put patch delete options head]
      end
    end
  end
end

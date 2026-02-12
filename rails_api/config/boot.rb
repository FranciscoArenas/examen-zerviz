ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup"

require "logger"

module Rails
	def self.logger
		@logger ||= Logger.new($stdout)
	end

	def self.logger=(logger)
		@logger = logger
	end
end

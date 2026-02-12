Rails.logger = ActiveSupport::Logger.new($stdout)
Rails.logger.formatter = Logger::Formatter.new

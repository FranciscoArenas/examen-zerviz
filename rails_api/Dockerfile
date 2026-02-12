FROM ruby:3.2.3-slim AS builder

WORKDIR /app

RUN apt-get update -qq && apt-get install -y --no-install-recommends \
	build-essential \
	libpq-dev \
	git \
	&& rm -rf /var/lib/apt/lists/*

COPY Gemfile Gemfile.lock* ./
RUN bundle config set --local path vendor/bundle \
	&& bundle install

COPY . .

FROM ruby:3.2.3-slim

WORKDIR /app

RUN apt-get update -qq && apt-get install -y --no-install-recommends \
	libpq5 \
	&& rm -rf /var/lib/apt/lists/*

COPY --from=builder /app /app

ENV BUNDLE_PATH=/app/vendor/bundle
ENV BUNDLE_APP_CONFIG=/app/.bundle
ENV RAILS_ENV=development
EXPOSE 3000

CMD ["bundle", "exec", "rackup", "-o", "0.0.0.0", "-p", "3000"]

FROM ruby:3.2.3

WORKDIR /app

COPY Gemfile Gemfile.lock* ./
RUN bundle install

COPY . .

ENV RAILS_ENV=development
EXPOSE 3000

CMD ["bundle", "exec", "rackup", "-o", "0.0.0.0", "-p", "3000"]

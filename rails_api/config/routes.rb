Rails.application.routes.draw do
  get "/health", to: "health#show"
  get "/docs", to: redirect("/docs/index.html")

  namespace :auth do
    post "/login", to: "sessions#create"
    post "/signup", to: "registrations#create"
  end
end

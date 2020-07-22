Rails.application.routes.draw do
  root to: 'home#index'

  get '/donate', to: "home#donate", as: "donate"
end

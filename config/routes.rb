Rails.application.routes.draw do
  resources :passwords, controller: "clearance/passwords", only: [:create, :new]
  resource :session, controller: "clearance/sessions", only: [:create]

  resources :users, only: [:create] do
    resource :password,
      controller: "clearance/passwords",
      only: [:edit, :update]
  end

  constraints Clearance::Constraints::SignedIn.new do
    root to: "dashboard#show", as: :signed_in_root
  end

  constraints Clearance::Constraints::SignedOut.new do
    root to: "home#index"
  end

  get "/sign_in" => "clearance/sessions#new", as: "sign_in"
  delete "/sign_out" => "clearance/sessions#destroy", as: "sign_out"
  get "/sign_up" => "clearance/users#new", as: "sign_up"

  get '/donate', to: "home#donate", as: "donate"
end

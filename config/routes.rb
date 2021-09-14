Rails.application.routes.draw do
  resources :videos
  root 'pages#home'

  match '/send_mail', to: 'pages#send_mail', via: 'post'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

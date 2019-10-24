Rails.application.routes.draw do
  root  'mains#index'
  get 'mains' => 'mains#index'
end

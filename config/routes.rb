Rails.application.routes.draw do
  root  'mains#index'
  # get 'mains' => 'mains#index'
  resources :mains do
    collection do
      get "about"
      get "contact"
      get "works"
      get "hikaku"
      # get "step4"
      # get "done"
    end


  end
end

get '/galleries/:id' do
  
end

post '/galleries' do
  @gallery = Gallery.new(title: params[:title])
  if @gallery.valid?
    current_user.galleries << @gallery
    redirect "/users/#{current_user.id}"
  else
    @errors = @gallery.errors.full_messages
    erb :"/users/profile"
  end
end

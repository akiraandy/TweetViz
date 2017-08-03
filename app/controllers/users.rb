get '/users/register' do
  erb :"/users/new"
end

post '/users' do
  p params
  @user = User.new(params[:user])
  if @user.save
    session[:user_id] = @user.id
    redirect "/"
  else
    @errors = @user.errors.full_messages
    erb :"/users/new"
  end
end

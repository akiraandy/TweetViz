get '/sessions/new' do
  erb :"sessions/login"
end

post '/sessions' do
  @user = User.find_by(email: params[:email])
  p params
  if @user
    if @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect "/"
    end
  else
    @errors = ["Invalid user/password combination"]
    erb :"/sessions/login"
  end
end

delete '/sessions' do
  session.delete(:user_id)
  redirect "/"
end

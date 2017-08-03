get '/' do
  tweets = []
  $t_client.search("to:justinbieber marry me", result_type: "recent").take(3).collect do |tweet|
    tweets << "#{tweet.user.screen_name}: #{tweet.text}"
  end
  p $rate.remaining
  erb :index
end

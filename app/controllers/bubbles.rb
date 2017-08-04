post '/gallery/:id/bubble' do
  if request.xhr?
    # tweets = $t_client.search("#{params[:term]}", lang: "en", result_type: "recent", count: 50)
    total_retweets = 100;
    # total_retweets = tweets.reduce(total_retweets){ |sum, tweet| sum += tweet.retweet_count}
    @bubble = Bubble.new(name: params[:term], value: total_retweets, gallery_id: params[:id])
    if @bubble.valid?
      hash = {name: @bubble.name, value: @bubble.value}
      JSON.generate(hash);
    end
  end
end

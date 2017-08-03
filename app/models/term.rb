class Term < ActiveRecord::Base
  belongs_to :user
  has_many :terms
  validates_presence_of :name, :user_id

  def value
    self.tweets.sum(:retweets)
  end
end

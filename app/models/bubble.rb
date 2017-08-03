class Bubble < ActiveRecord::Base
  belongs_to :gallery
  has_many :tweets
end

class Tweet < ActiveRecord::Base
  belongs_to :bubble

  validates_presence_of :bubble_id

end

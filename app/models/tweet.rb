class Tweet < ActiveRecord::Base
  belongs_to :term

  validates_presence_of :term_id
  
end

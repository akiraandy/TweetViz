class Gallery < ActiveRecord::Base
  belongs_to :user
  has_many :bubbles

  validates :title, presence: true
end

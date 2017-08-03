class User < ActiveRecord::Base
  include BCrypt

  has_many :bubbles, through: :galleries
  has_many :galleries

  validates_presence_of :username, :hashed_password, :email

  def password
    @password ||= Password.new(hashed_password)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.hashed_password = @password
  end

  def authenticate(entered_password)
    if self.password == entered_password
      return self
    else
      nil
    end
  end
end

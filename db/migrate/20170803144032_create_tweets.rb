class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :retweets
      t.integer :bubble_id, null: false

      t.timestamps
    end
  end
end

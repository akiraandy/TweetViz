class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :retweets
      t.integer :term_id, null: false

      t.timestamps
    end
  end
end

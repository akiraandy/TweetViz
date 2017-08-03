class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :title, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end

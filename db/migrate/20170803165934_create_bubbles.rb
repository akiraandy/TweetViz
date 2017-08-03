class CreateBubbles < ActiveRecord::Migration
  def change
    create_table :bubbles do |t|
      t.string :name, null: false
      t.integer :value
      t.integer :gallery_id, null: false
    end
  end
end

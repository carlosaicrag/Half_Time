class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :comment_id, null:false
      t.integer :story_id, null:false

      t.timestamps
    end
  end
end

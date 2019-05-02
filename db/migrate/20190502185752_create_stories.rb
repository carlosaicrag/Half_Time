class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null:false 
      t.text :body, null:false, unique:true
      t.integer :author_id, null:false

      t.timestamps
    end
    add_index :stories, :title, unique:true
  end
end

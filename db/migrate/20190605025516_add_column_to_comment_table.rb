class AddColumnToCommentTable < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :story_id, :integer
  end
end

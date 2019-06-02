class RemoveStoryIdColumnFromFollowTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :story_id
  end
end

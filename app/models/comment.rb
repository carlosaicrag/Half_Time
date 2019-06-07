# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  story_id   :integer
#

class Comment < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :story, 
        foreign_key: :story_id,
        class_name: "Story"
end

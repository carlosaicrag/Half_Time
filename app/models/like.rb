# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Like < ApplicationRecord
    belongs_to :user, 
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :story,
        foreign_key: :story_id,
        class_name: "Story"
end

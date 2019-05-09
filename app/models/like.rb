# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  comment_id :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
    belongs_to :user,
        
end

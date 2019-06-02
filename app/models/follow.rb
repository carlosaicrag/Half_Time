# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  followee_id :integer          not null
#  follower_id :integer          not null
#

class Follow < ApplicationRecord
    validates :followee_id, presence:true
    validates :follower_id, presence:true
    
    belongs_to :followee,
        foreign_key: :followee_id,
        class_name: "User"

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: "User"
end

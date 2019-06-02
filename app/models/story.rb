# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
    validates :author_id, :title,:body,presence:true
    
    belongs_to :user,
        foreign_key: :author_id,
        class_name: "User"

    has_many :likes,
        foreign_key: :story_id,
        class_name: "Like"

    has_one_attached :photo
end

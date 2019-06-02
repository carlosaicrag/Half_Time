# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence:true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :stories,
        foreign_key: :author_id,
        class_name: "Story"

    has_many :likes,
        foreign_key: :user_id,
        class_name: "Like"
    
    has_many :followers_id,
        foreign_key: :followee_id,
        class_name: "Follow"

    has_many :followees_id,
        foreign_key: :follower_id,
        class_name: "Follow"

    has_many :followers, 
        through: :followers_id,
        source: :follower

    has_many :followees, 
        through: :followees_id, 
        source: :followee

    attr_reader :password
    after_initialize :ensure_session_token 

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def self.find_by_credentials(email,password)
        user = User.find_by(email:email)
        return nil if user.nil?

        return user if user.is_password?(password)
        return nil
    end

    def is_password?(password)
        return true if BCrypt::Password.new(password_digest).is_password?(password) 
        return false 
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end

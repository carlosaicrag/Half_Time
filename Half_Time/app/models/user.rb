class User < ApplicationRecord
    validates :email, :session_token, :password_digest, presence:true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    attr_reader :password
    after_initialize :ensure_session_token 

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def self.find_by_credentials(username,password)
        user = User.find_by(username:username,password:password)
        return nil if user.nil?

        return user if self.is_password?(password)
        return nil
    end

    def is_password?(password)
        return true if BCrypt::password.new(password_digest).is_password?(password) 
        return false 
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.session_token.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end

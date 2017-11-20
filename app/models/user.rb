class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = Bcrypt::Password.create(password)
  end

  def valid_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user && @user.valid_password?(password) ? @user : nil
  end
end

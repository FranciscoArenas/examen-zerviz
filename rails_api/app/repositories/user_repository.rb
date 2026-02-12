class UserRepository
  def find_by_email(email)
    User.find_by(email: email)
  end

  def create(attrs)
    User.create(attrs)
  end
end

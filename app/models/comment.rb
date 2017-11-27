class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :project

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end

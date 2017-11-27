class Project < ApplicationRecord
  validates :title, :description, :category, :img_url, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :comments
end

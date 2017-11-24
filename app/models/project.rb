class Project < ApplicationRecord
  validates :title, :description, :category, :img_url, presence: true

  belongs_to :user, foreign_key: :creator_id
end

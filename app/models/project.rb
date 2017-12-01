class Project < ApplicationRecord
  validates :title, :description, :category, :img_url, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :comments

  def self.top_five_search(query_param)
    param = '%' + query_param.downcase + '%'
    Project.where('lower(title) LIKE ?', param).limit(5)
  end
end

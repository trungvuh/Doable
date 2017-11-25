json.img_url asset_path(project.img_url)
json.extract! project, :id, :title, :category, :description

json.creator do
  json.name project.creator.username
  json.id project.creator_id
end

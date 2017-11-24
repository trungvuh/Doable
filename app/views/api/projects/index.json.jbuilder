@projects.each do |project|
  json.set! project.id do
    json.img_url asset_path(project.img_url)
    json.extract! project, :id, :title, :creator, :category
  end
end

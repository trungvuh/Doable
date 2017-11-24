@projects.each do |project|
  json.set! project.id do
    json.image_url asset_path(project.img_url)
    json.extract! project, :title, :category
  end
end

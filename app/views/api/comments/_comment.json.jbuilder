json.extract! comment, :id, :body, :project_id, :created_at

json.author do
  json.id comment.author_id
  json.name comment.author.username
end

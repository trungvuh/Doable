json.partial! 'api/projects/project', project: @project

json.comments @project.comments.each do |comment|
  json.partial! '/api/comments/comment', comment: comment
end

# json.comments do
#   json.array! @project.comments, :id
# end

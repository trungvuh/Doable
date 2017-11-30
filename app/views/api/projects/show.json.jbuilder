# json.partial! 'api/projects/project', project: @project
#
# json.comments @project.comments.each do |comment|
#   json.extract! comment, :id
# end
#

json.partial! 'api/projects/project', project: @project
json.comment_ids @project.comments.pluck(:id)

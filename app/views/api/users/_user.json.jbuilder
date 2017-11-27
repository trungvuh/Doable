json.extract! user, :id, :username

json.projects do
  json.array! user.comments, :id
end

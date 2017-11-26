@projects.try(:each) do |project|
  if project.nil?
    next
  else
    json.set! project.id do
      json.partial! 'api/projects/project', project: project
    end
  end
end

@comments.try(:each) do |comment|
  if comment.nil?
    next
  else
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

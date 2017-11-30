export const commentSelector = ({comments}, projectId) => {

  let projectComments = [];
  Object.keys(comments).forEach( commentId => {
    let comment = comments[commentId];
    if (comment.project_id === parseInt(projectId)) {
      projectComments.push(comment);
    }
  });
  return projectComments;
};

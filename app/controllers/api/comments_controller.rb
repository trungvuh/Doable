class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])

    if @comment
      render '/api/comments/show'
    else
      render json: ["Comment doesn't exist"], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @project = Project.find(@comment.project_id)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    project = @comment.project

    if @comment.update_attributes(comment_params)
      render json: project, include: [:comments]
    else
      render json: ["Can't edit this comment"], status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id
      @coment.destroy!
      render json: {}
    else
      render json: ["Can't delete this comment"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :project_id)
  end
end

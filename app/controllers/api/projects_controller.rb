class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']
  end

  def show
    @project = Project.find(params[:id])

    if @project
      render '/api/projects/show'
    else
      render json: ["Project doesn't exist"], status: 404
    end
  end

  def create
    @project = Project.new(project_params)
    @project.creator_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      render '/api/projects/show'
    else
      render json: ["Can't edit this project"], status: 404
    end
  end

  def destroy
    @project = Project.find(params[:id])

    if @project
      @project.destroy!
      render :index
    else
      render json: ["Can't delete this project"], status: 404
    end
  end

  private

  def project_params
    params.require(:project).permit(:title, :description, :img_url, :category)
  end

end

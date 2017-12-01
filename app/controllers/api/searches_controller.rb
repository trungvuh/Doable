class Api::SearchesController < ApplicationController
  def index
    @projects = Project.top_five_search(search_params[:query])
  end

  def search_params
    params.require(:search).permit(:query, :project_id)
  end
end

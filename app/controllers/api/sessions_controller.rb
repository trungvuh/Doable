class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      redirect_to root_url
    else
      render json: ['Invalid username/ password combination']
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Invalid user'], status: 404
    end
  end
end

class Api::V1::PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  def index
    @photos = Photo.all
    render json: @photos
  end

  def show
    render json: @photo
  end

  def new
    @photo = Photo.new

  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo, notice: "Photo was successfully created."
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @photo.update(photo_params)
      redirect_to @photo, notice: "Photo was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @photo.destroy

  end

  private
def set_photo
  @photo = Photo.find(params[:id])

end


  def photo_params
    params.require(:photo).permit(:title, :description, :user_id, :category_id)
  end
end

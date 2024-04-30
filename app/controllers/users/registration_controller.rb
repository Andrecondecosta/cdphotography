class Users::RegistrationsController < Devise::RegistrationsController
 respond_to :json
 private

  def respond_with(resource, _opts = {})
    register_sucess && return if resource.persisted?

    register_failed
  end

  def regiter_sucess
    render json: {
        message: 'Signed up sucessfully.',
        user: current_user
      }, status: :ok

  end

  def register_failed
    render json: { message: "Something went wrong." }, status: :unprocessable_entity

  end

end

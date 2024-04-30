class User::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: {
      message: 'Logged in sucessfully.',
      user: current_user
    }, status: :ok
  end

  def respond_to_on_destroy
    log_out_sucess && return if corrent_user


    log_out_failed
    end

  def log_out_sucess
    render json: { message: 'Logged out sucessfully.' }, status: :ok

  end

    def log_out_failure
      render json: { message: 'Something went wrong.' }, status: :unauthorized
    end
end

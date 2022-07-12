class V1::GreetingsController < ApplicationController
  def index
    message = Greeting.find_by(id: rand(1..5)).message
    render json: { greetings: [
      {
        message:
      }
    ] }.to_json
  end
end

class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(todos_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    render json: Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todos_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    render json: @todos
  end

  private
  def todos_params
    params.require(:todo).permit(:title, :body, :done)
  end
end

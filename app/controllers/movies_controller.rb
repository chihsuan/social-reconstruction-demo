class MoviesController < ApplicationController

  def index
  end

  def run
    script = 'python scripts/relationship_mining.py' + ' ' + params[:votes] + ' ' + params[:itr]
    system(script)
    @data = File.read("result/social_graph.json")
    render :json => @data 
  end

  def get_data
    movie = params[:movie]
    @data = File.read("result/" + movie + "/social_graph.json")
    render :json => @data 
  end

end

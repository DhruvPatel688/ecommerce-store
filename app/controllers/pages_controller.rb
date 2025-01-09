class PagesController < ApplicationController
  def home 
    @product = Product.all
  end
end

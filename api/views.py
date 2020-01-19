# here we are defining our routes
# a blueprint of how to construct or extend an application
# To access incoming request data, you can use the global request object
from flask import Blueprint, jsonify, request
from . import db
from .models import Movie

# declaring the contructor for our blueprint
main = Blueprint('main', __name__)

# 1st endpoint
# binding the route to our Blueprint
# use try/except normally
# a route is 'GET' by default
@main.route('/add_movie', methods=['POST'])
def add_movie():
    # Parse data as JSON
    movie_data = request.get_json()

    new_movie = Movie(title=movie_data['title'], rating=movie_data['rating'])

    db.session.add(new_movie)
    db.session.commit()

    return 'Done', 201

@main.route('/movies')
def movies():
    movie_list = Movie.query.all()
    movies = []

    for movie in movie_list:
        movies.append({'title': movie.title, 'rating': movie.rating})

    return jsonify({'movies': movies})

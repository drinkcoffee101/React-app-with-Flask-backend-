# here we are creating the server

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# allows communication bewteen sevrer and web apps 
# For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts
from flask_cors import CORS, cross_origin

db = SQLAlchemy()

def create_app():
    # create and configure the app
    app = Flask(__name__)
    cors = CORS(app)
    # setup cross communication 
    app.config['CORS_HEADERS'] = 'Content-Type'

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)

    # importing here to avoid circular inputs
    from .views import main
    # mounting our routes into the server 
    app.register_blueprint(main)

    return app

# use -- flask run -- to start the server 
# export the flask app to the api using -- export FLASK_APP=api 
# and set -- export FLASK_DEBUG=1 (pretty much enables hot reloading)

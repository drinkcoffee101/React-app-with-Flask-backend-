from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    cors = CORS(app)
    
    app.config['CORS_HEADERS'] = 'Content-Type'

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

    db.init_app(app)

    # importing here to avoid circular inputs
    from .views import main
    app.register_blueprint(main)

    return app

# use -- flask run -- to start the server 
# export the flask app to the api using -- export FLASK_APP=api 
# and set -- export FLASK_DEBUG=1 (pretty much enables hot reloading)

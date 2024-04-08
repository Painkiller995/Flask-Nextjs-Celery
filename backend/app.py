from flask import Flask
from backend.api_config.api import api, add_namespaces


def create_app():
    app = Flask("app")
    api.init_app(app)
    add_namespaces(api)
    return app

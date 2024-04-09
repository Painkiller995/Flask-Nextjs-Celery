from flask import Flask
from flask_restx import Api
from backend.server_app.server import server_ns

api = Api(version="1.0", title="API", doc="/docs")


def add_namespaces(api: Api):
    api.add_namespace(server_ns, "/server")


def register_api(app: Flask) -> None:
    api.init_app(app)
    add_namespaces(api)

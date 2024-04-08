from flask_restx import Api
from ..server_app.server import server_ns

api = Api(version="1.0", title="API", doc="/docs")


def add_namespaces(api: Api):
    api.add_namespace(server_ns, "/server")

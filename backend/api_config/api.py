from flask_restx import Api
from ..ping_app.ping import ping_ns

api = Api(version="1.0", title="API", doc="/docs")


def add_namespaces(api: Api):
    api.add_namespace(ping_ns, "/ping")

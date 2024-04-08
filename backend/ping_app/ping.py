from flask_restx import Resource, Namespace

ping_ns = Namespace("Ping")


@ping_ns.route("/ping")
class Ping(Resource):
    def get(self):
        return {"status": "success", "message": "pong!"}

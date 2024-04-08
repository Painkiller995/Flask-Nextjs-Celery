from flask_restx import Resource, Namespace
from datetime import datetime

ping_ns = Namespace("Ping")


@ping_ns.route("/ping")
class Ping(Resource):
    def get(self):
        return {"status": "success", "message": "pong!"}


@ping_ns.route("/time")
class Time(Resource):
    def get(self):
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return {"status": "success", "server_time": current_time}

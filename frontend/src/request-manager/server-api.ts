import { PingResponse, TimeResponse } from "@/types/server";
import AxiosRequest from "./common"; // Update the import path as needed

class ServerAPI {
  static async getPing(id: number) {
    const url = `/server/ping/`;
    return await AxiosRequest.getData<PingResponse>(url);
  }

  static async getTime() {
    const url = `/server/time`;
    return await AxiosRequest.getData<TimeResponse>(url);
  }
}

export default ServerAPI;

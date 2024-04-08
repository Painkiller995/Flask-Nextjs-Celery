import axios from "axios";

class AxiosRequest {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async makeRequest<T>(config: any): Promise<T> {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postFormData<T>(url: string, formData: FormData): Promise<T> {
    const config = {
      method: "post",
      url: this.baseURL + url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return this.makeRequest<T>(config);
  }

  async postData<T>(url: string, data: any): Promise<T> {
    const config = {
      method: "post",
      url: this.baseURL + url,
      data,
    };

    return this.makeRequest<T>(config);
  }

  async patchData<T>(url: string, data: any): Promise<T> {
    const config = {
      method: "patch",
      url: this.baseURL + url,
      data,
    };

    return this.makeRequest<T>(config);
  }

  async getData<T>(url: string, params?: Record<string, any>): Promise<T> {
    const config = {
      method: "get",
      url: this.baseURL + url,
      params,
    };
    return this.makeRequest<T>(config);
  }

  async deleteData<T>(url: string): Promise<T> {
    const config = {
      method: "delete",
      url: this.baseURL + url,
    };

    return this.makeRequest<T>(config);
  }
}

export default new AxiosRequest("http://127.0.0.1:5000");

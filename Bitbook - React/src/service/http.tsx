import { requestHeader } from "../shared/constants";

class HTTP {
  get(url: string) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...requestHeader,
      },
    }).then((response) => response.json());
  }

  post(url: string, data: any) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...requestHeader,
      },
    }).then((response) => response.json());
  }

  patch(url: string, data: any) {
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...requestHeader,
      },
    });
  }

  delete(url: any) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...requestHeader,
      },
    });
  }
}

export const http = new HTTP();

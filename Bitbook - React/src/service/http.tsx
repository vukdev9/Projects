import { requestHeader } from "../shared/constants";

class HTTP {
  get(url: string, token: any) {
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        ...requestHeader,
      },
    }).then((response) => response.json());
  }

  post(url: string, data: any, token: any) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        ...requestHeader,
      },
    }).then((response) => response.json());
  }

  patch(url: string, data: any, token: any) {
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        ...requestHeader,
      },
    });
  }

  delete(url: any, token: any) {
    return fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        ...requestHeader,
      },
    });
  }
}

export const http = new HTTP();

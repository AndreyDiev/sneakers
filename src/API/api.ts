export interface LoginDto {
    telegram: string;
    password: string;
}

export class Api {
  constructor() {
    this.URL = "https://engine.amru.host/api/";
    this.token = localStorage.getItem("token");
  }
  URL;
  token: string | null;

  async login(creds: LoginDto) {
    return fetch(this.URL + "profile/sig-in", {
      method: "POST",
      body: JSON.stringify(creds)
    }).then(this.getJsonResponse)
  }

  private getJsonResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("access-token");
      //window.location.reload();
    }
    throw new Error(res.statusText);
  }

  async createSneakersLot(data: any) {
    return fetch(this.URL + '/sneakers/sneakers', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        token: this.token ?? ''
      },
    })
  }
}

const api = new Api();
export default api;

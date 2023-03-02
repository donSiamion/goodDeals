import  { apiUrl } from '../config.json'

class AuthService {
  async signUp(login: string, pass: string) {
    let resp = await fetch(apiUrl + '/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, pass })
    })
    let { user } = await resp.json();
    return user;
  }

  logout() {
    localStorage.removeItem("token");
  }

  async login(login: string, pass: string) {
    let resp = await fetch(apiUrl + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, pass })
    })
    let { token } = await resp.json();
    return token;
  }
}

export default new AuthService();
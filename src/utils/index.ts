export function getToken() {
  return localStorage.getItem('token') || '';
}
export function setToken(v:any) {
  return localStorage.setItem('token',v);
}
export function removeToken() {
  return localStorage.removeItem('token');
}
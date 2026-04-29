export function checkLoginCookie(name) {
    return document.cookie.includes(name + "=");
}
export const getCookie = (name) => {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

export const appName = "Moody";
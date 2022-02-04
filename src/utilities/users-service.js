import * as usersAPI from './users-api';

export async function signUp(userData){
    try { 
        // Delegate the network request code to the users-api which will ultimately return a JSON web token.
        const token = await usersAPI.signUp(userData);
        // Baby step by returning whatever is sent back by API  call.
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        
    }
}

export function getToken() {
    // get token
    const token = localStorage.getItem('token');
    // check if there is a token or not
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser(){
    const token = getToken();

    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export function logOut() {
    localStorage.removeItem('token');

}

export async function login(credentials) {
    try {
        const token = await usersAPI.login(credentials);
        localStorage.setItem('token', token);
        return getUser();
    } catch {

    }
}

export async function checkToken(){
    return new Date(await usersAPI.checkToken());
}
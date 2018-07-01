export class GoogleUser {
  constructor(
    public id?: string,
    public email?: string,
    public name?: string,
    public photoUrl?: string,
    public firstName?: string,
    public lastName?: string,
    public authToken?: string,
    public idToken?: string) {} // Reference https://developers.google.com/identity/sign-in/web/backend-auth
}

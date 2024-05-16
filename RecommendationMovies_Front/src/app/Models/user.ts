export class UserModel{
     username: string;
     password: string;
     email: string;
     age: string;
     country: string;
     genres: string[]

    constructor(username: string, password: string, email: string, age: string, country: string, genres: string[]){
        this.username = username,
        this.password = password,
        this.email = email,
        this.age = age,
        this.country = country
        this.genres = genres
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string) {
        this.password = password;
    }
    
    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public getAge(): string {
        return this.age;
    }

    public setAge(age: string) {
        this.age = age;
    }

    public getCountry(): string{
        return this.country
    }

    public setCountry(country: string){
        this.country = country
    }




}
export class SignUpInfo {
    name: string;
    cedula: number;
    username: string;
    email: string;
    role: string[];
    password: string;
 
    constructor(name: string, cedula: number ,username: string, email: string, password: string) {
        this.name = name;
        this.cedula = cedula;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
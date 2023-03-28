export class Cashier{
    id !: string;
    name !: string;
    age !: number;
    email !: string;
    workTimings !: Date;
    salary !: number;
    designation !: string;

    constructor(
        id: string, 
        name: string,
        age : number,
        email : string,
        workTimings : Date,
        salary : number,
        designation : string
    ){
        this.id = id;
		this.name = name;
		this.age = age;
		this.email = email;
		this.workTimings = workTimings;
		this.salary = salary;
		this.designation = designation;
    }
}
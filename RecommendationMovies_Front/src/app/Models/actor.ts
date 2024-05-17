export class ActorModel{
    name: string;
    birth_date: string;
    nationality: string;

    constructor(name: string, birth_date: string, nationality: string ){
        this.name = name,
        this.birth_date = birth_date,
        this.nationality = nationality
    }
}
export class GenreModel{
    name: string;
    description: string;
    popularity: string;

    constructor(name: string, description: string, popularity: string){
        this.name = name,
        this.description = description,
        this.popularity = popularity
    }
}
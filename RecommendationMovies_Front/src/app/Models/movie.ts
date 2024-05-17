export class MovieModel{
    title: string;
    duration_minutes: string;
    rating: string;
    release_year: string;

    constructor(title: string, duration_minutes: string, rating: string, release_year: string ){
        this.title = title,
        this.duration_minutes = duration_minutes,
        this.rating= rating,
        this.release_year = release_year
    }
}
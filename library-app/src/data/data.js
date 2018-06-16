import Book from '../models/book';
import Author from '../models/author.js';
import Library from '../models/library.js';

const genres = {
    detective: 'Detective',
    drama: 'Drama'
}

console.log(typeof Author);

const gogol = new Author('Gogol', 240);
const gugo = new Author('Gugo', 320);

const books = [
    new Book('Nose', gogol, genres.drama, 1925),
    new Book('Notre-Dame de Paris', gugo, genres.detective, 1831)
]

export const library = new Library(books);
//export const library = 123;




'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/Books');
const testSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean
});

const Books = mongoose.model('Books', testSchema);
const Book1 = new Books({
  name: 'Beloved',
  description: 'Beloved is a 1987 novel by the American writer Toni Morrison. Set after the American Civil War, it tells the story of a family of formerly enslaved people whose Cincinnati home is haunted by a malevolent spirit',
  status: true
});
console.log(Book1);

const Book2 = new Books({
    name: 'The Great Gatsby',
    description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraways interactions with mysterious millionaire Jay Gatsby and Gatsbys obsession to reunite with his former lover',
    status: true
    });
    console.log(Book2);

    const Book3 = new Books({
        name: 'To Kill a Mockingbird',
        description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize for Fiction and has been translated into more than forty languages, selling more than thirty million copies.[1] It was the first book to be published with a price tag and was later shelved at the Bantam Books Corporation in New York City',
        status: true
        });
        console.log(Book3);
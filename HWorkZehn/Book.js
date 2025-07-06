class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }
//геттери
  get title() {
        return this._title; 
  }
    get author() {
        return this._author; 
  }
    get year() {
        return this._year; 
  }
  //сеттери з валідацією
    set title(value) {
        if (typeof value !== "string" ||
value.trim() === "") {
            throw new Error("Name soll nicht leeren Satz sein");
    }
        this._title = value;
}
    set author(value) {
        if (typeof value !== "string" || 
value.trim() === "") {
            throw new Error("Author soll nicht leeren Satz sein");
    }
        this._author = value;
}
    set year(value) {
        if (!Number.isInteger(value) || 
value <= 0) {
            throw new Error("Jah sollte ein Nummer sein");
    }
        this._author = value;
}
//метод для виводу інформації
    printInfo() {
        console.log(`Das Buch: "$
{this.title}" - Autor: $
{this.author}, Jahr: ${this.year}`);
    }

//статичний метод - знаходження найстарішої книги
    static findOldestBook(books) {
        return books.reduce((oldest,
current) =>
    current.year < oldest.year ?
current : oldest
    );
}
}
module.exports = Book;
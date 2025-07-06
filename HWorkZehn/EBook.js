const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  // Геттер
  get fileFormat() {
    return this._fileFormat;
  }

  // Сеттер з валідацією
  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу має бути непорожнім рядком');
    }
    this._fileFormat = value;
  }

  // Перевизначений метод printInfo()
  printInfo() {
    console.log(
      `Е-книга: "${this.title}" — Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`
    );
  }

  // Статичний метод — створення EBook з Book
  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error('Очікується екземпляр класу Book');
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}

module.exports = EBook;
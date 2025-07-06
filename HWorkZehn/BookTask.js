const Book = require('./Book');
const EBook = require('./EBook');

// Створюємо екземпляри класу Book
const book1 = new Book("Місто", "Валер'ян Підмогильний", 1927);
const book2 = new Book("Кобзар", "Тарас Шевченко", 1840);

// Виклик методу printInfo()
book1.printInfo();
book2.printInfo();

// Створюємо екземпляр класу EBook
const ebook1 = new EBook("JavaScript for Beginners", "John Doe", 2020, "PDF");
ebook1.printInfo();

// Геттери/Сеттери з валідацією
try {
  ebook1.fileFormat = "EPUB";
  ebook1.year = 2021;
  console.log(`Оновлено формат: ${ebook1.fileFormat}, рік: ${ebook1.year}`);
} catch (e) {
  console.error(e.message);
}

// Масив книг
const books = [book1, book2, ebook1];

// Статичний метод для знаходження найдавнішої книги
const oldest = Book.findOldestBook(books);
console.log("Найстаріша книга:");
oldest.printInfo();

// Статичний метод для створення EBook з Book
const ebook2 = EBook.fromBook(book2, "MOBI");
ebook2.printInfo();
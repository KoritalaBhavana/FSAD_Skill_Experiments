package com.klu.main;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.klu.model.Book;

@RestController
public class LibraryController {

    private List<Book> books = new ArrayList<>();

    // 2. /welcome
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Online Library System";
    }

    // 3. /count
    @GetMapping("/count")
    public int countBooks() {
        return books.size();
    }

    // 4. /price
    @GetMapping("/price")
    public double bookPrice() {
        return 299.99;
    }

    // 5. /books
    @GetMapping("/books")
    public List<String> getBooks() {
        List<String> titles = new ArrayList<>();
        titles.add("Spring Boot");
        titles.add("Java Programming");
        titles.add("Microservices");
        return titles;
    }

    // 6. /books/{id}
    @GetMapping("/books/{id}")
    public String getBookById(@PathVariable int id) {
        return "Details of Book with ID: " + id;
    }

    // 7. /search?title=
    @GetMapping("/search")
    public String searchBook(@RequestParam String title) {
        return "Search result for book: " + title;
    }

    // 8. /author/{name}
    @GetMapping("/author/{name}")
    public String author(@PathVariable String name) {
        return "Books written by " + name;
    }

    // 9. /addbook
    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book) {
        books.add(book);
        return "Book added successfully";
    }

    // 10. /viewbooks
    @GetMapping("/viewbooks")
    public List<Book> viewBooks() {
        return books;
    }
}

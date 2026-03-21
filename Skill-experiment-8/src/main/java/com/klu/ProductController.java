package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductRepository repo;

    // /products/category/{category}
    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category) {
        return repo.findByCategory(category);
    }

    // /products/filter?min=&max=
    @GetMapping("/filter")
    public List<Product> filterByPrice(@RequestParam double min, @RequestParam double max) {
        return repo.findByPriceBetween(min, max);
    }

    // /products/sorted
    @GetMapping("/sorted")
    public List<Product> sortedProducts() {
        return repo.sortByPrice();
    }

    // /products/expensive/{price}
    @GetMapping("/expensive/{price}")
    public List<Product> expensiveProducts(@PathVariable double price) {
        return repo.findExpensiveProducts(price);
    }

    // INSERT PRODUCT
    @PostMapping("/add")
    public Product addProduct(@RequestBody Product p) {
        return repo.save(p);
    }
}
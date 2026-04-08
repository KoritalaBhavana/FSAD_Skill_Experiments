package com.klu;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {

    @GetMapping("/message")
    public String getMessage() {
        return "Hello from Spring Boot Backend!";
    }
}
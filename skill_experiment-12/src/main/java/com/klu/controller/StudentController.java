package com.klu.controller;

import com.klu.model.Student;
import com.klu.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/students")
    public List<Student> getAll() {
        return service.getAll();
    }

    @PostMapping("/students")
    public Student add(@RequestBody Student s) {
        return service.save(s);
    }

    @PutMapping("/students/{id}")
    public Student update(@PathVariable int id, @RequestBody Student s) {
        return service.update(id, s);
    }

    @DeleteMapping("/students/{id}")
    public void delete(@PathVariable int id) {
        service.delete(id);
    }
}
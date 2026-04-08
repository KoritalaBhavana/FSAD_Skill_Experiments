package com.klu.controller;

import com.klu.model.Student;
import com.klu.exception.StudentNotFoundException;
import com.klu.exception.InvalidInputException;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable String id) {

        int studentId;

        // Check invalid input (non-numeric)
        try {
            studentId = Integer.parseInt(id);
        } catch (NumberFormatException e) {
            throw new InvalidInputException("Invalid ID format. Please enter a numeric value.");
        }

        // Dummy condition for testing
        if (studentId != 1) {
            throw new StudentNotFoundException("Student with ID " + studentId + " not found");
        }

        return new Student(1, "Bhavana", "CSE");
    }
}
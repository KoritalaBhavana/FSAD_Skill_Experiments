package com.klu.service;

import com.klu.model.Student;
import com.klu.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student save(Student s) {
        return repo.save(s);
    }

    public Student update(int id, Student s) {
        s.setId(id);
        return repo.save(s);
    }

    public void delete(int id) {
        repo.deleteById(id);
    }
}
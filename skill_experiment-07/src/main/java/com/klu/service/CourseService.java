package com.klu.service;

import com.klu.model.Course;
import com.klu.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public List<Course> getAllCourses() {
        return repository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return repository.findById(id);
    }

    public Course addCourse(Course course) {
        return repository.save(course);
    }

    public Course updateCourse(Long id, Course course) {
        course.setCourseId(id);
        return repository.save(course);
    }

    public void deleteCourse(Long id) {
        repository.deleteById(id);
    }

    public List<Course> searchByTitle(String title) {
        return repository.findByTitleContaining(title);
    }
}
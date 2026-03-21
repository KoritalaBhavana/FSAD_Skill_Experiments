import React, { useState, useEffect } from "react";
import axios from "axios";

function AddStudent({ editStudent, setEditStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (student.id) {
      axios.put(`http://localhost:9094/students/${student.id}`, student)
        .then(() => setEditStudent(null));
    } else {
      axios.post("http://localhost:9094/students", student);
    }

    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div>
      <h2>Add / Update Student</h2>

      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default AddStudent;
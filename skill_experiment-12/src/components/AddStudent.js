import React, { useState, useEffect } from "react";

function AddStudent({ editStudent, setEditStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });
  const [error, setError] = useState("");

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
      fetch(`http://localhost:7070/students/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }

          setEditStudent(null);
          setError("");
        })
        .catch(() => {
          setError("Unable to save the student right now. Start the backend and try again.");
        });
    } else {
      fetch("http://localhost:7070/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }

          setError("");
        })
        .catch(() => {
          setError("Unable to save the student right now. Start the backend and try again.");
        });
    }

    setStudent({ name: "", email: "", course: "" });
  };

  return (
    <div>
      <h2>Add / Update Student</h2>

      {error && <p>{error}</p>}

      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course" />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default AddStudent;
import React, { useEffect, useState } from "react";

function StudentList({ setEditStudent }) {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    fetch("http://localhost:7070/students")
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        return res.json();
      })
      .then(data => {
        setStudents(data);
        setError("");
      })
      .catch(() => {
        setStudents([]);
        setError("Unable to load students. Start the backend on port 7070 and the MySQL database, then refresh.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteStudent = (id) => {
    fetch(`http://localhost:7070/students/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        fetchData();
      })
      .catch(() => {
        setError("Unable to delete the student right now. Start the backend and try again.");
      });
  };

  return (
    <div>
      <h2>Student List</h2>

      {error && <p>{error}</p>}

      {students.map(s => (
        <div key={s.id}>
          {s.name} - {s.email} - {s.course}

          <button onClick={() => setEditStudent(s)}>Edit</button>
          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
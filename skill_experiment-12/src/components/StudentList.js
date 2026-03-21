import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ setEditStudent }) {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:9094/students")   // ✅ FIXED
      .then(res => setStudents(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:9094/students/${id}`)  // ✅ FIXED
      .then(fetchData);
  };

  return (
    <div>
      <h2>Student List</h2>

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
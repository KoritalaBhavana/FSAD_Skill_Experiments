import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [editStudent, setEditStudent] = useState(null);

  return (
    <div>
      <AddStudent editStudent={editStudent} setEditStudent={setEditStudent} />
      <StudentList setEditStudent={setEditStudent} />
    </div>
  );
}

export default App;
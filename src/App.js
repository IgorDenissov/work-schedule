import React, { useState } from "react";
import Calendar from "./Components/Calendar";
import { generateSchedule } from "./utils";

function App() {
  const [startDate, setStartDate] = useState("2024-11-23");
  const schedule = generateSchedule(startDate, 60);

  return (
    <div>
      <h1>4 on 4 off shift pattern</h1>
      <h2>enter the date of the first working day</h2>
  
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <Calendar schedule={schedule} />
    </div>
  );
}

export default App;
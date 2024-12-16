import React from "react";
import "./Calendar.css"; // Добавьте стили

export default function Calendar({ schedule }) {
  return (
    <div className="calendar">
      {schedule.map((day, index) => (
        <div
          key={index}
          className={`day ${day.type}`}
          title={day.type === "work" ? "Рабочий день" : "Выходной"}
        >
          {day.date.toLocaleDateString()}
        </div>
      ))}
    </div>
  );
}

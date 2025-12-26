import { useState } from "react";
import { useTasks } from "../store/taskContext";

export default function TaskInput() {
  const [text, setText] = useState("");
  const { addTask } = useTasks();

  return (
    <div className="task-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button
        onClick={() => {
          addTask(text);
          setText("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}

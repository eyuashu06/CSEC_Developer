import { useTasks } from "../store/taskContext";

export default function Header() {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

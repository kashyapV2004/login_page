import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser || storedUser === "undefined") {
        navigate("/login");
        return;
      }

      const parsedUser = JSON.parse(storedUser);

      if (!parsedUser) {
        navigate("/login");
        return;
      }
      setUser(parsedUser);
    } catch (error) {
      console.error("Error parsing user:", error);
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Dummy data
  const dummyData = [
    "Lead 1",
    "Lead 2",
    "Task 1",
    "Task 2",
    "User A",
    "User B",
  ];

  return (
    <div className="app-container">
      <div className="card">
        <h2>Dashboard</h2>

        <p>Welcome, {user?.name}</p>

        <ul className="list">
          {dummyData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

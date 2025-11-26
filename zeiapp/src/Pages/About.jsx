import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function About() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Current user: {user}</h1>

      <button onClick={() => setUser("Updated User!")}>
        Change User
      </button>
    </div>
  );
}

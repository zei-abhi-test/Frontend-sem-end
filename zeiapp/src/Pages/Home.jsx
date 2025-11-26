import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  return <h1>Welcome {user}</h1>;
}

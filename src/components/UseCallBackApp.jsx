import { useCallback, useState } from "react";
import { shuffleArray } from "../utils/shuffle";
import Search from "./Search";

const allUsers = ["santiago", "daniel", "simon", "jorge", "james"];
const UseCallBackApp = () => {
  console.log("USE CALLBACK RE RENDER");
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, []);
  return (
    <>
      <div className="tutorial">
        <div className="align-center mb-2 flex">
          <button onClick={() => setUsers(shuffleArray(users))}>Shuffle</button>
          <Search onChange={handleSearch} />
        </div>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseCallBackApp;

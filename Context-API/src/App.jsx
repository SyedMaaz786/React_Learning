import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function App() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Hello {user}</h1>

            <button onClick={() => setUser("Maaz")}>
                Change Username
            </button>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [storedUsername, setStoredUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/api/returnUser?userId=${username}`)
        .then((response) => {
            if (response.data && response.data.username) {
                setStoredUsername(response.data.username);
            } else {
                setStoredUsername(null);
            }
        })
        .catch((err) => {
            console.error("Error fetching username:", err);
        });
    }, [username]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === "") {
            setMessage("Username cannot be empty");
            return;
        }
        else if (storedUsername) {
            setMessage("That username is already taken");
            return;
        }
        else if (inputPassword === "") {
            setMessage("Password cannot be empty");
            return;
        }
        else if (inputPassword === confirmPassword) {
            const newUser = {
                userId: username, 
                password: inputPassword,
                dailyGoal: null
            };

            console.log("Registering user:", newUser);

            try {

                const response = await axios.post("http://localhost:4000/api/setUser", newUser);
                console.log("Server response:", response.data);

                setUsername("");
                setInputPassword("");
                setConfirmPassword("");

                navigate("/dashboard");
            } catch (err) {
                console.error("Error registering user:", err);
            }
        } else {
            setMessage("Passwords do not match");
        }
    };

    return (
        <div className="register">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <label>
          Username: 
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password: 
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password: 
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
        </div>
    )
};

export default Register;
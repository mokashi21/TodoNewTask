import React, { useState } from "react";
import { TextField, Typography, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Login() {
  const [uname, setUname] = useState("");
  const [Pname, setPname] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPname(passwordValue);

    if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    if (uname.trim() === "" || Pname.trim() === "") {
      // If any field is empty, display an error message and don't proceed
      setPasswordError("All fields are required.");
      return;
    }
    const savedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if the entered username and password match the saved data
    if (
      savedUserData &&
      uname === savedUserData.username &&
      Pname === savedUserData.password
    ) {
      // Login successful! Perform any desired actions or redirect to a dashboard page.
      navigate("/todo");
      // console.log("Login successful!");
    } else {
      // Incorrect username or password, display an error message
      setPasswordError("Incorrect username or password.");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <Typography variant="h3" align="center" gutterBottom>
          Login
        </Typography>
        <form style={{ width: "100%" }}>
          <TextField
            type="text"
            placeholder="Username"
            label="User-Name"
            name="username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            placeholder="password"
            type="password"
            label="Password"
            name="password"
            value={Pname}
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {passwordError && (
            <Typography variant="body2" color="error">
              {passwordError}
            </Typography>
          )}

          <Box display="flex" justifyContent="center" width="100%">
            <Button variant="outlined" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Login;

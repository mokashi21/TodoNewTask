// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { TextField, Typography, Container, Box } from "@mui/material";
// // import Button from "@mui/material/Button";
// // import axios from "axios";

// // function Registration() {
// //   const [uname, setUname] = useState("");
// //   const [Pname, setPname] = useState("");
// //   const [passwordError, setPasswordError] = useState("");
// //   const navigate = useNavigate();

// //   const handlePasswordChange = (e) => {
// //     const passwordValue = e.target.value;
// //     setPname(passwordValue);

// //     if (passwordValue.length < 8) {
// //       setPasswordError("Password must be at least 8 characters long.");
// //     } else {
// //       setPasswordError("");
// //     }
// //   };

// //   const handleRegister = () => {
// //     // Validate the input fields
// //     if (uname.trim() === "" || Pname.trim() === "") {
// //       // If any field is empty, display an error message and don't proceed
// //       setPasswordError("All fields are required.");
// //       return;
// //     }

// //     // Validate password length
// //     if (Pname.length < 8) {
// //       setPasswordError("Password must be at least 8 characters long.");
// //       return;
// //     }

// //     // Create an object with the input data
// //     const userData = {
// //       username: uname,
// //       password: Pname,
// //     };

// //     // Make a POST request to the API for registration
// //     axios
// //       .post("http://ishanalvin.pythonanywhere.com/register/", userData)
// //       .then((response) => {
// //         // Handle the response after the data is successfully sent
// //         console.log("Data saved to the server:", response.data);

// //         // Clear the input fields
// //         setUname("");
// //         setPname("");

// //         // Navigate to the login page after successful registration
// //         navigate("/login");
// //       })
// //       .catch((error) => {
// //         // Handle the error
// //         console.error("Error sending data:", error);
// //       });
// //   };

// //   return (
// //     <Container maxWidth="sm">
// //       <Box
// //         display="flex"
// //         flexDirection="column"
// //         alignItems="center"
// //         justifyContent="center"
// //         minHeight="80vh"
// //       >
// //         <Typography variant="h3" align="center" gutterBottom>
// //           Registration Form
// //         </Typography>
// //         <form style={{ width: "100%" }}>
// //           <TextField
// //             required
// //             type="text"
// //             label="User-Name"
// //             name="username"
// //             value={uname}
// //             onChange={(e) => setUname(e.target.value)}
// //             variant="outlined"
// //             margin="normal"
// //             fullWidth
// //           />
// //           <TextField
// //             required
// //             type="password"
// //             label="Password"
// //             name="password"
// //             value={Pname}
// //             onChange={handlePasswordChange}
// //             variant="outlined"
// //             margin="normal"
// //             fullWidth
// //           />
// //           {passwordError && (
// //             <Typography variant="body2" color="error">
// //               {passwordError}
// //             </Typography>
// //           )}

// //           <Box display="flex" justifyContent="center" width="100%">
// //             <Button variant="outlined" onClick={handleRegister}>
// //               Register
// //             </Button>
// //           </Box>
// //         </form>
// //       </Box>
// //     </Container>
// //   );
// // }

// // export default Registration;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Registration() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API using axios
//     axios
//       .get("http://ishanalvin.pythonanywhere.com/register") // Replace with your API endpoint
//       .then((response) => {
//         // Handle the response and update the state with the fetched data
//         console.log(response);
//         setUsers(response);
//       })
//       .catch((error) => {
//         // Handle errors if any
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to fetch data only once on component mount

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => (
//           <div>
//             {" "}
//             <li key={user.id}>{user.username}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Registration;
import React from "react";
import axios from "axios";

function Registration() {
  // Set the request headers
  const config = {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwNjA3MjQzLCJpYXQiOjE2OTA2MDY5NDMsImp0aSI6ImE2OTE4YTVjNjU4ZTQ5OGE4NjVlMjNjYmJhZmViY2IwIiwidXNlcl9pZCI6Mn0._O5hITW49crfO2bgHPt4dEbvCi-ZHlpEJYptBJbafb4",
    },
  };

  // Make the GET request
  axios
    .get("http://ishanalvin.pythonanywhere.com/todos/", config)
    .then((response) => {
      console.log(response.data);
      // Use the data received from the API here
    })
    .catch((error) => {
      console.error(error);
      // Handle any errors that occurred during the API call
    });

  return (
    <div>
      <h1>Registration</h1>
    </div>
  );
}

export default Registration;

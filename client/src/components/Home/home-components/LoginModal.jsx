import React, {useState, useEffect} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Stack, TextField} from "@mui/material";

import axios from "axios";
import {useNavigate} from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import {textAlign} from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: "fit-content",
  border: 5,
  borderColor: "#1976d2",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 7,
};

const LoginModal = ({mod}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => mod.setLoginModalOpen(false);

  //   onSubmit
  const handleLogin = (event) => {
    console.log("Login request submitted !");
    event.preventDefault();
    setIsLoading(true);
    if (!email || !password) return;

    axios
      .post("https://cryptic-launchpad-server.vercel.app/userLogin", {
        email,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        localStorage.setItem("crypticUser", JSON.stringify(res.data.user));
        handleClose();
        navigate("/dashboard");
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  };

  return (
    <div>
      <Modal
        open={mod.loginModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            mb={2}
            sx={{textAlign: "center", color: "#1976d2", fontWeight: "600"}}
          >
            Let's Login
          </Typography>

          <Grid item sm={12} mb={2} mt={1}>
            <TextField
              name="email"
              required
              label="Email Address"
              placeholder="Enter your email address ?"
              fullWidth
              type={"text"}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>

          <Grid item sm={12} mb={2} mt={1}>
            <TextField
              name="password"
              required
              label="Password"
              placeholder="Enter your password ?"
              fullWidth
              type={"text"}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>

          <Grid item sm={12} mb={2} mt={3}>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                style={{
                  fontWeight: "bold",
                  height: "100%",
                  padding: "2%",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            )}
          </Grid>

          {/* <Grid item sm={12} mt={1}>
            {register ? (
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                style={{fontWeight: 800, padding: "2%"}}
                onClick={convertToLogin}
              >
                Existing User ? Let's Login
              </Button>
            ) : (
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                style={{fontWeight: 800, padding: "2%"}}
                onClick={convertToRegister}
              >
                New User ? Let's Register
              </Button>
            )}
          </Grid> */}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;

import { Box, Stack, Typography, TextField, Button, Card } from "@mui/material";
import { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import './style.css';

const AuthPage: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(localStorage.getItem("access-token"))
  );

  //   async function signIn(cred: SignupDto) {
  //     return api
  //       .login(cred)
  //       .then((auth) => {
  //         console.log(auth)
  //         setIsAuth(Boolean(auth.token));
  //         localStorage.setItem("access-token", auth.token);
  //       })
  //   }

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     signIn({ login, password })
  //       .then(() => {
  //         window.location.reload();
  //       })
  //       .catch((er) => {
  //         console.log(er);
  //         setError('Неправильный логин или пароль')
  //       });
  //   };

  //if (isAuth) return <Navigate to="/" replace={true} />

  return (
    <div className="wrapper">
      <Card
        elevation={10}
        sx={{
          width: "40vw",
          height: "70vh",
          margin: "15vh auto",
          minWidth: "320px",
          maxWidth: "700px",
        }}
      >
        <form
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography variant="h2">SNEAKERS</Typography>
          <TextField
            variant="filled"
            label="Логин"
            sx={{ width: "80%" }}
          ></TextField>
          <TextField
            variant="filled"
            label="Пароль"
            sx={{ width: "80%" }}
          ></TextField>
          <Button variant="contained">Войти</Button>
        </form>
      </Card>
    </div>
  );
};

export default AuthPage;

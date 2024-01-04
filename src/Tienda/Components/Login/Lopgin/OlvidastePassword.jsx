import { appFirebase } from "../../../helpers/credencialesFirebase";
import Logo from "../../Header/img/TeletubiesStore.jpg";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../../../assets/UserLogin.css";
import { NavLink } from "react-router-dom";
import { RegisteFire } from "../../../helpers/RegisterFire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(appFirebase);
let data;


export const OlvidastePassword = () => {
  const RegistroGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        data = {
          Correo: user.email,
          Contraseña: "",
          Apellido: user.displayName,
          Nombre: user.displayName,
          uid: user.uid,
          accessToken: token,
          proveedor: credential.providerId,
          fechaCreacion: user.metadata.creationTime,
          Avatar: user.photoURL,
        };

        localStorage.setItem("logeado", JSON.stringify(user));
        window.location.replace("/");
        RegisteFire(data);
        // ...
      })
      .catch((error) => {
        return;
        // ...
      });
  };

  return (
    <Container component="main" maxWidth="sm" className="vh-100 d-flex">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ mt: 10, bgcolor: "info.main" }}></Avatar>
        <Typography sx={{ m: 2 }} component="h1" variant="h5">
        RESTAURAR CONTRASEÑA
        </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>              
            <Typography className="container">
            Ingresa tu correo electrónico y te enviaremos las instrucciones para restaurar tu contraseña.
              </Typography>              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>             
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"              
              sx={{ mt: 3, mb: 2 }}
            >
              Restablecer Contraseña
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <NavLink to="/login" variant="body2">
                  Ya tienes una cuenta? Iniciar Sesión
                </NavLink>
              </Grid>
            </Grid>
            <Grid className="mt-4">           
              <span>Regresar a la tienda: </span>
              <NavLink sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }} to="/" variant="body2">
              <img className="w-50" src={Logo}></img></NavLink>
            </Grid>
          </Box>
      </Box>
    </Container>
  );
};

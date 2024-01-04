import { appFirebase } from "../../../helpers/credencialesFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { RegisteFire } from "../../../helpers/RegisterFire";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ControlledCarousel from "./ControlledCarousel";
import "../../../../assets/UserLogin.css";

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(appFirebase);
export const FormLogin = () => {
  let navigate = useNavigate();
  let data;

  const handlerSubmit = (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("logeado", JSON.stringify(user));

        navigate("/Logeado", { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El correo o contraseña son incorrectas",
        });
      });
  };

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
    <>
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        className="oculto"
        item
        xs={false}
        sm={4}
        md={6}
        lg={8}
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/vector-gratis/fondo-geometrico-plano_23-2148957201.jpg?w=2000)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ControlledCarousel className="carrusel" />
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={4} component={Paper} elevation={6} square className={"d-flex align-items-center"}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            {/*<LockOutlinedIcon />*/}
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia Sesión
          </Typography>          
          <Box component="form" sx={{ mt: 1 }} onSubmit={handlerSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Ingresa tu email"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Ingresa tu contraseña"
              type="password"
              id="password"
            />
            <FormControlLabel
              control={<Checkbox value="" color="primary" />}
              label="Recuerdame"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="info"
              sx={{ mt: 3, mb: 2 }}
            >
              INGRESAR
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="./OlvidastePassword" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                mt={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link href="#" onClick={RegistroGoogle} alignCenter className="botonG">
                  <img src="https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-google-single-sign-on.ashx?rev=e5d31b9fa12848d3bd44c8c960d0dd3b&hash=7BD65F7FD1EF91A9248E1C4167CB01E4" alt=""/>
                  {"Iniciar Sesión con Google"}
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                mt={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link href="/" alignCenter>
                  Regresar a Teletubies Store
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};
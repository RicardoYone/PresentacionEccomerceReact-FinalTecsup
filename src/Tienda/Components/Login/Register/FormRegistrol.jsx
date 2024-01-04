import { appFirebase } from "../../../helpers/credencialesFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { RegisteFire } from "../../../helpers/RegisterFire";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../../../assets/UserLogin.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Header/img/TeletubiesStore.jpg";

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(appFirebase);
export const FromRegistrol = () => {
  const Swal = require("sweetalert2");
  let data;
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const Correo = e.target.email.value;
    const Contraseña = e.target.password.value;
    const Apellido = e.target.apellido.value;
    const Nombre = e.target.name.value;
    createUserWithEmailAndPassword(auth, Correo, Contraseña)
      .then((userCredential) => {
        const user = userCredential.user;
        data = {
          Correo,
          Contraseña,
          Apellido,
          Nombre,
          uid: user.uid,
          accessToken: user.accessToken,
          proveedor: "Correo Electronico",
          fechaCreacion: user.metadata.creationTime,
          Avatar: "",
        };
        RegisteFire(data);
        window.location.replace("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            icon: "error",
            title: "Ya existe el usuario <br>" + Correo,
            text: "Intente con otro correo!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Contraseña muy corta",
            text: "Intente con otra contraseña!",
          });
        }
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
    <Container
      component="main"
      maxWidth="sm"
      className="vh-100 d-flex align-items-center"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "info.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Registrate
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={handlerSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="nombre"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="apellido"
                label="Apellido"
                name="apellido"
                autoComplete="family-name"
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                ng-model="password"
                validate-password=""
                data-toggle-password=""
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className=""
                control={<Checkbox value="" color="primary" />}
                label="Autorizo recibir comunicaciones promocionales y autorizo el uso de mi información para fines adicionales."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className=""
                control={<Checkbox value="" color="primary" />}
                label="Declaro que he leído y acepto la nueva Política de Privacidad Términos y Condiciones."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="info"
            sx={{ mt: 3, mb: 2 }}
          >
            Completar Registro
          </Button>          
          <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Regresar a la Tienda
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Ya tienes una cuenta? Iniciar Sesión"}
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
            </Grid>          
        </Box>        
      </Box>
    </Container>
  );
};

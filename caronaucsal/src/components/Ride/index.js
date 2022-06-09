import React from "react";
import "./Ride.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Ride() {
  const [open, setOpen] = React.useState(false);
  const [openFinalizar, setOpenFinalizar] = React.useState(false);

  const [openExcluirAlert, setOpenExcluirAlert] = React.useState(false);
  const [openFinalizarAlert, setOpenFinalizarAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenFinal = () => {
    setOpenFinalizar(true);
  };

  const handleCloseFinal = () => {
    setOpenFinalizar(false);
  };

  const handleClickOpenFinalAlert = () => {
    setOpenFinalizarAlert(true);
    setOpenFinalizar(false);
  };

  const handleClickOpenExcluirAlert = () => {
    setOpenExcluirAlert(true);
    setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenFinalizarAlert(false);
    setOpenExcluirAlert(false);
  };

  return (
    <>
      <div className="container">
        <div className="flex">
          <p className="title"> Ucsal</p>
          <ArrowForwardIcon className="icon" />
          <p className="title">Lauro de Freitas</p>
        </div>
        <p className="date">18/05/2022 - 9:40h</p>
        <p className="vagas">Vagas: 4</p>
        <hr></hr>
        <p className="roteiro">Roteiro</p>
        <ul>
          <li>Ucsal</li>
          <li>XXXXXXXXXXXX</li>
          <li>YYYYYYYYYYYY</li>
          <li>ZZZZZZZZZZZZ</li>
          <li>Lauro de Freitas</li>
        </ul>
        <div className="flex2">
          <button onClick={handleClickOpenFinal} className="finalizar">
            Finalizar
          </button>
          <button className="avaliar">Avaliar</button>
          <button onClick={handleClickOpen} className="excluir">
            Excluir
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem Certeza que deseja excluir essa carona
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClickOpenExcluirAlert}>Excluir</Button>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openFinalizar}
        onClose={handleCloseFinal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tem Certeza que deseja Finalizar essa carona
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClickOpenFinalAlert}>Finalizar</Button>
          <Button onClick={handleCloseFinal} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openExcluirAlert}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Carona Excluida com sucesso!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFinalizarAlert}
        autoHideDuration={5000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Carona Finalizada com sucesso!
        </Alert>
      </Snackbar>
    </>
  );
}

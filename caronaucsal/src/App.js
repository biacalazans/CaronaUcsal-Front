import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./assets/Logo.svg";
import Avatar from "./assets/Avatar.svg";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";

import Ride from "./components/Ride";

const Accordion = styled((props) => <MuiAccordion {...props} />)(
  ({ theme }) => ({
    borderRadius: "10px",

    borderTop: "0px",
  })
);

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#183446",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#BC3908",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className="logo" src={Logo}></img>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <div className="flex-container">
          <img className="avatar" src={Avatar}></img>
          <div>
            <h2>Joãozinho da Silva</h2>
            <p className="subtitle">joazinho@email.com</p>
            <p className="subtitle">200021916 4.5</p>
            <button className="btn">Criar Carona</button>
          </div>
        </div>
        <div className="mobile-profile">
          <div className="flex-container-mobile">
            <img className="avatar" src={Avatar}></img>
            <div>
              <h2>Joãozinho da Silva</h2>
              <p className="subtitle">joazinho@email.com</p>
              <p className="subtitle">200021916 4.5</p>
            </div>
          </div>

          <button className="btn">Criar Carona</button>
        </div>
        <br />
        <br />
        <div className="flex-container1">
          <div className="flex-item">
            <p className="rides">Suas Caronas - Como motorista</p>
            <Accordion className="dropdown">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="drop-text ">Ativas</p>
              </AccordionSummary>
              <AccordionDetails>
                <Ride />
                <br></br>
                <Ride />
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="drop-text ">Finalizadas</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você ainda não tem caronas finalizadas como motorista
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="flex-item">
            <p className="rides">Suas Caronas - Como passageiro</p>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="drop-text ">Ativas</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você ainda não tem caronas ativas como passageiro
                </Typography>
              </AccordionDetails>
            </Accordion>
            <br />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="drop-text ">Finalizadas</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Você ainda não tem caronas finalizadas como passageiro
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;

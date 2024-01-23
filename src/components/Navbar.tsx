import { useLocation, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Fab, Grid } from "@mui/material"

//@ts-ignore
import Filler from "../assets/Filler.svg"


export default function Navbar(): JSX.Element {
  const location = useLocation()  
  const navigate = useNavigate()

  const pages = [
    { title: "Home", link: "../" },
    { title: "About", link: "../0/about" },
    { title: "Contact Us", link: "../0/contact" },
  ]

  return (
    <AppBar
      position="static"
      sx={{ background: "#826652", boxShadow: "none", padding: 4 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Grid item xs={1} >
              <img width={"60%"} src={Filler} alt="Filler" />
            </Grid>
            <Grid container item xs={9.5} justifyContent={"center"} alignContent={"center"} ml={8}>
              {pages.map((page, index) => {
                const samePathname = location.pathname === page.link.slice(2)
                
                return (
                  <Grid item key={index} style={{ marginBottom: 2, marginTop: 2 }}>
                    <Button
                      variant="text"
                      onClick={() => navigate(page.link)}
                      sx={{
                        color: samePathname ? "#FFFFFF" : "#D89D44",
                        display: "block",
                        fontSize: 26,
                        fontWeight: 700,
                        textTransform: "capitalize",
                        fontFamily: "Lora"
                      }}
                    >
                      {page.title}
                    </Button>
                  </Grid>
                )
              })}
            </Grid>
            <Grid container item xs={1.5} alignContent={"center"}>
              <Fab
                variant="extended"
                style={{
                  color: "white",
                  backgroundColor: "#D83583",
                  fontWeight: 700,
                  fontSize: 24
                }}
              >
                Order Now
              </Fab>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

import { useLocation, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material"

//@ts-ignore
import Filler from "../assets/Filler.svg"


export default function Navbar(): JSX.Element {
  const location = useLocation()  
  const navigate = useNavigate()

  const pages = [
    { title: "Home", link: "../" },
    { title: "About", link: "../0/about" },
    { title: "Reviews", link: "../0/review" },
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
            <Grid item xs={1} sx={{ mr: 2}} >
              <img width={"60%"} src={Filler} alt="Filler" />
            </Grid>
            <Grid container justifyContent={"center"} alignContent={"center"}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

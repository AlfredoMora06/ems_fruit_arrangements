import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Fab, Grid, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"

//@ts-ignore
import Logo from "../assets/Logo.svg"

type NavbarProps = {
  hideOrderNow?: boolean
}

export default function Navbar({hideOrderNow}: NavbarProps): JSX.Element {
  const {t} = useTranslation("common")
  const location = useLocation()  
  const navigate = useNavigate()
  const [drawer, setDrawer] = React.useState<boolean>(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const toggleDrawer = (open: boolean) =>  (event: React.KeyboardEvent | React.MouseEvent) => { 
    setDrawer(open)
  }

  const handleCloseNavMenuRedirect = (link: string) => {
    navigate(link)
    toggleDrawer(false)
  }

  const pages = [
    { title: t("Navbar.home"), link: "../" },
    { title: t("Navbar.about"), link: "../0/about" },
    { title: t("Navbar.reviews"), link: "../0/reviews" },
    { title: t("Navbar.contact"), link: "../0/contact" },
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => {
          const samePathname = location.pathname === page.link.slice(2)

          return (
            <ListItem key={page.title} disablePadding sx={{width: '100%'}}>
              <ListItemButton onClick={() => {handleCloseNavMenuRedirect(page.link)}}>
                <ListItemText primary={page.title} primaryTypographyProps={{fontSize: 18}} sx={{fontWeight: 500, color: samePathname ? 'white' : '#D89D44'}}/>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <AppBar
      position="static"
      sx={{ background: "#826652", boxShadow: "none", paddingY: isMobile ? 0 : 1, paddingX: isMobile ? 0 : 4 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={1} mt={1}>
              </Grid>
              <IconButton
                size='large'
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                sx={{color: '#D89D44'}}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor="right"
                PaperProps={{
                  sx: { width: "50%" , overflow: "hidden", backgroundColor: '#826652'},
                }}
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                {list()}
              </SwipeableDrawer>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Grid item xs={1} >
              <img width={"70%"} src={Logo} alt="Logo" style={{borderRadius: 50}} />
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
            <Grid container item xs={2} alignContent={"center"} justifyContent={"flex-end"}>
              { hideOrderNow 
                ? <></> 
                : <Fab
                  variant="extended"
                  style={{
                    color: "white",
                    backgroundColor: "#D83583",
                    fontWeight: 700,
                    fontSize: 24
                  }}
                  onClick={() => navigate("../0/order")}
                >
                  {t("Navbar.order")}
                </Fab>
              }
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

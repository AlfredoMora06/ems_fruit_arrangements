import React from "react"
import Box from "@mui/material/Box"
import { Container, Fab, Menu, MenuItem, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import InstagramIcon from '@mui/icons-material/Instagram'
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"


export default function Footer(): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorElNavLan, setAnchorElNavLan] = React.useState(null)


  const handleOpenNavMenuLan = (event: any) => {
    setAnchorElNavLan(event.currentTarget)
  }
  
  const handleCloseNavMenuLan = () => {
    setAnchorElNavLan(null)
  }

  const handleCloseNavMenuLanRefresh = (language: string) => {
    // dispatch(updateLanguage(language))
  }

  return (
    <>
      <div style={{backgroundColor: "#FDC8E1", paddingBottom: 30 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
              <Grid item xs={12} md={1}></Grid>
              <Grid item container xs={12} md={9} justifyContent={"center"}>
                <Grid item xs={12} paddingTop={1}>
                  <Typography variant={isMobile ? "h5" :"h4"} align="center" fontWeight={700} sx={{color: "#6B3F18"}}>
                    Follow on Instagram for updates and future giveaways!
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"} paddingTop={2}>
                  <InstagramIcon
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/emsfruitarrangements",
                        "_blank"
                      )
                    }
                    sx={{ fontSize: 50, color: 'white', cursor: "pointer", "&:hover": {color: '#D83583'} }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={2} container alignContent={'center'} justifyContent={'center'}>
                <Fab
                  onClick={handleOpenNavMenuLan}
                  variant="extended"
                  style={{
                    color: "white",
                    backgroundColor: "#D83583",
                    fontWeight: 700,
                    fontSize: isMobile ? 15 : 20
                  }}
                >
                  Languages
                </Fab>
                <Menu
                  anchorEl={anchorElNavLan}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left"}}
                  open={Boolean(anchorElNavLan)}
                  onClose={handleCloseNavMenuLan}
                >
                  <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("en")}} sx={{minWidth: 80}}>  
                    <Typography textAlign="center" paddingLeft={1}>English</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("es")}} sx={{minWidth: 80}}>
                    <Typography textAlign="center" paddingLeft={1}>Spanish</Typography>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

import { Container, Fade, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import Navbar from "../components/Navbar"
//@ts-ignore
import Berries from "../assets/Berries.png"

export default function Home():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const isMobileStyles = {
    top: isMobile ? '50%' : '64%', 
    '-ms-transform': isMobile ? 'translateY(-50%)' : 'translateY(-64%)', 
    transform: isMobile ? 'translateY(-50%)' : 'translateY(-64%)'
  }

  return (
    <>
      <div style={{ background: `#FFE0F1`}}>
        <Navbar />
        <div
          style={{
            minHeight: "87vh",
            backgroundImage: `url(${Berries})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? 'right 28% bottom 50%' : 'center'
          }}
        >
          <Container>
            <Grid container alignItems={'center'} justifyContent={'center'}>
              <Grid item xs={11} md={12} sx={{margin: 0, position: 'absolute', ...isMobileStyles }}>
                <Fade in={true} timeout={2000}>
                  <Typography 
                    fontFamily={'Abhaya Libre'} 
                    sx={{color: "#D89D44"}} 
                    align="center" 
                    fontWeight={700}
                    fontSize={isMobile ? 45 : 90}
                  >
                    EMS FRUIT ARRANGEMENTS
                  </Typography>
                </Fade>
                <Fade in={true} timeout={3000}>
                  <Typography 
                    variant="h3" 
                    fontFamily={'Abhaya Libre'} 
                    sx={{color: "#D89D44"}} 
                    align="center" 
                    fontWeight={700}
                    fontSize={isMobile ? 30 : 50}
                  >
                    “Bringing Happiness One Strawberry At A Time”
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          </Container>
        
        </div>
      </div>
    </>
  )
}

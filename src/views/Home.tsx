import { Container, Fade, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"

import Navbar from "../components/Navbar"
//@ts-ignore
import Berries from "../assets/Berries.png"
import Footer from "../components/Footer"


export default function Home():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const {t} = useTranslation("common")

  const isMobileStyles = {
    top: isMobile ? '50%' : '64%', 
    '-ms-transform': isMobile ? 'translateY(-50%)' : 'translateY(-64%)', 
    transform: isMobile ? 'translateY(-50%)' : 'translateY(-64%)'
  }

  return (
    <>
      <div style={{ background: `#FFE0F1`,}}>
        <Navbar />
        <div
          style={{
            minHeight: '90vh',
            backgroundImage: `url(${Berries})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? 'right 28% bottom 50%' : 'center'
          }}
        >
          <Container>
            <Grid container alignItems={'center'} justifyContent={'center'}>
              <Grid item xs={11} md={12} mt={isMobile ? 35 : 40} sx={{...isMobileStyles }}>
                <Fade in={true} timeout={2000}>
                  <Typography 
                    fontFamily={'Abhaya Libre'} 
                    sx={{color: "#D89D44"}} 
                    align="center" 
                    fontWeight={700}
                    fontSize={isMobile ? 45 : 90}
                  >
                    {t('Home.titleOne')}
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
                    {t('Home.titleTwo')}
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          </Container>
        
        </div>
      </div>
      <Footer />
    </>
  )
}

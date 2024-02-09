import { Container, Grid, Theme, Typography } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"

import Navbar from "../components/Navbar"
//@ts-ignore
import SpinBerries from "../assets/SpinBerries.png"
//@ts-ignore
import Ellipse from "../assets/Ellipse.png"
import '../App.css'
import Footer from "../components/Footer"


const useStyles = makeStyles<Theme>(() => ({
  rotateIcon: {
    animation: "$spin 25s linear infinite",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(360deg)"
    },
    "100%": {
      transform: "rotate(0deg)"
    }
  }
}))

export default function About():JSX.Element {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const {t} = useTranslation("common")

  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          minHeight: "80vh",
          paddingBottom: isMobile ? 50 : 0,
        }}
      >
        <Navbar />
        <Container>
          <Grid container className="fade-in-bottom">
            <Grid item xs={12} md={6}>
              <div
                style={{
                  backgroundImage: `url(${Ellipse})`,
                  backgroundSize: isMobile ? '55%' : 'auto',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  overflow: 'hidden'
                }}
              >
                <img className={classes.rotateIcon} width="100%" src={SpinBerries} alt="SpinBerries" />
              </div>
            </Grid>
            <Grid item xs={11.5} md={6} container alignContent={"center"} justifyContent={"center"}>
              <Typography fontSize={24} fontWeight={700} sx={{color: "#826652"}} align={isMobile ? 'justify' : 'left'}>
                {t('About.summary')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

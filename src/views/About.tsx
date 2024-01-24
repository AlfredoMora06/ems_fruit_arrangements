import { Container, Grid, Theme, Typography } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import Navbar from "../components/Navbar"
//@ts-ignore
import SpinBerries from "../assets/SpinBerries.png"
//@ts-ignore
import Ellipse from "../assets/Ellipse.png"

const useStyles = makeStyles<Theme>(() => ({
  rotateIcon: {
    animation: "$spin 25s linear infinite"
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

  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          minHeight: "100vh",
          paddingBottom: isMobile ? 50 : 0,
        }}
      >
        <Navbar />
        <Container>
          <Grid container pt={10}>
            <Grid item xs={12} md={6} pb={5}>
              <div
                style={{
                  backgroundImage: `url(${Ellipse})`,
                  backgroundSize: isMobile ? '55%' : 'auto',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
                <img className={classes.rotateIcon} width="100%" src={SpinBerries} alt="SpinBerries" />
              </div>
            </Grid>
            <Grid item xs={11.5} md={6} container alignContent={"center"} justifyContent={"center"}>
              <Typography fontSize={24} fontWeight={700} sx={{color: "#826652"}} align={isMobile ? 'justify' : 'left'}>
                Established in 2020, my entrepreneurial journey began with a curiosity for fruit carving, evolving seamlessly into crafting exquisite fruit arrangements. The turning point came with the introduction of chocolate-covered strawberries, creating a distinct identity for my business. Despite early challenges that nearly led to closure, perseverance paved the way. Celebrating almost 4 years of success, I'm proud of the sweet success built from dedication and resilience. I absolute love my business. I look forward to creating elegantly designed treats for your next event!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

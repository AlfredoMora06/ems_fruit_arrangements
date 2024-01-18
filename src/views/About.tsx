import { Container, Grid, Theme, Typography } from "@mui/material"
import makeStyles from "@mui/styles/makeStyles"

import Navbar from "../components/Navbar"
//@ts-ignore
import SpinBerries from "../assets/SpinBerries.png"

const useStyles = makeStyles<Theme>(() => ({
  rotateIcon: {
    animation: "$spin 15s linear infinite"
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

  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          height: "100vh" 
        }}
      >
        <Navbar />
        <Container>
          <Grid container pt={10}>
            <Grid item xs={12} md={6} pb={5}>
              <img className={classes.rotateIcon} width="90%" src={SpinBerries} alt="SpinBerries" />
            </Grid>
            <Grid item xs={12} md={6} container alignContent={"center"}>
              <Typography fontSize={24} fontWeight={700} sx={{color: "#826652"}}>
                Established in 2020, my entrepreneurial journey began with a curiosity for fruit carving, evolving seamlessly into crafting exquisite fruit arrangements. The turning point came with the introduction of chocolate-covered strawberries, creating a distinct identity for my business. Despite early challenges that nearly led to closure, perseverance paved the way. Celebrating almost 4 years of success, I'm proud of the sweet success built from dedication and resilience. I absolute love my business. I look forward to creating elegantly designed treats for your next event!
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

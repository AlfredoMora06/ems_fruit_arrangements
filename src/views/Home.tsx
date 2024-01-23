import { Container, Grid, Typography } from "@mui/material"

import Navbar from "../components/Navbar"
//@ts-ignore
import Berries from "../assets/Berries.png"

export default function Home():JSX.Element {
  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          
        }}
      >
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            backgroundImage: `url(${Berries})`,
            backgroundSize: 'cover'
          }}
        >
          <Container>
            <Grid container alignItems={'center'}>
              <Grid item xs={12} sx={{margin: 0, position: 'absolute', top: '64%', '-ms-transform': 'translateY(-64%)', transform: 'translateY(-64%)' }}>
                <Typography variant="h1" fontFamily={'Abhaya Libre'} sx={{color: "#D89D44"}} align="center">
                  EMSFRUITARRANGEMENTS
                </Typography>
                <Typography variant="h3" fontFamily={'Abhaya Libre'} sx={{color: "#D89D44"}} align="center">
                  “Bringing Happiness One Strawberry At A Time”
                </Typography>
              </Grid>
            </Grid>
          </Container>
        
        </div>
      </div>
    </>
  )
}

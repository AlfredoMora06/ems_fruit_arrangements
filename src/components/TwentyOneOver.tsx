import { Button, Container, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import '../App.css'


type TwentyOneOverProps = {
  notOverTwentyOne: () => void,
  closeTopDialog: () => void
}

export default function TwentyOneOver({closeTopDialog}: TwentyOneOverProps):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container className="fade-in-bottom">
      <Grid container pt={1}>
        <Grid item xs={12}>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Some of these can be ordered with alcohol
          </Typography>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Please note that clients must be 21 or older to order anything with alcohol
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={7} mb={4}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant="contained"
            onClick={closeTopDialog}
          >
            I understand
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

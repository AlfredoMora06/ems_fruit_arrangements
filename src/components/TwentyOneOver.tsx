import { Button, Container, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

import '../App.css'


type TwentyOneOverProps = {
  notOverTwentyOne: () => void,
  closeTopDialog: () => void
}

export default function TwentyOneOver({notOverTwentyOne, closeTopDialog}: TwentyOneOverProps):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container className="fade-in-bottom">
      <Grid container pt={1}>
        <Grid item xs={12}>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Clients must be 21 or older to order from this package, as they may contain alcohol.
          </Typography>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Please confirm that you are 21 or older.
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={7} mb={4}>
        <Grid item xs={6} container justifyContent={'center'}>
          <Button
            variant="contained"
            startIcon={<CheckIcon/>}
            onClick={closeTopDialog}
          >
            I am 21+
          </Button>
        </Grid>
        <Grid item xs={6} container justifyContent={'center'}>
          <Button
            variant="contained"
            startIcon={<CloseIcon/>}
            onClick={notOverTwentyOne}
          >
            I am not 21+
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

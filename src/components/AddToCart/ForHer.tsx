import React from "react"
import { Button, Container, Grid, Typography } from "@mui/material"
import emailjs from '@emailjs/browser'
import { useSnackbar } from "notistack"

//@ts-ignore
import Dialog from "../Dialog"
import ForHerPackageForm from "../forms/ForHerPackageForm"
import TwentyOneOver from "../TwentyOneOver"
import { BuyingOption, chocolateCoveredStrawberries } from "../../util/BuyingOptions"


type ForHerProps = {
  setActiveBuyingOption: (activeBuyingOption: BuyingOption) => void
}

export default function ForHer({setActiveBuyingOption}: ForHerProps): JSX.Element {
  // Note: top = 21
  const [topdialog, setTopdialog] = React.useState<boolean>(true)
  const [dialog, setDialog] = React.useState<boolean>(false)
  const {enqueueSnackbar} = useSnackbar()

  const notOverTwentyOne = (): void => {
    setDialog(false)
    setActiveBuyingOption(chocolateCoveredStrawberries)
  }

  const sendEmail = async (values: any): Promise<void> => {
    await emailjs.send(
      `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, 
      `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, 
      values, 
      `${process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}`
    )
    .then((result) => {
      if(result.status === 200){
        enqueueSnackbar('Email Sent Succesfully', {variant: "success"})
      } else {
        enqueueSnackbar('Email could not be sent, please try again later', {variant: "error"})
      }
    }, () => {
      enqueueSnackbar('Email could not be sent, please try again later', {variant: "error"})
    })
  }

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        <Grid container spacing={2} justifyContent={'center'} mb={4}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h4" fontWeight={700} align="center">Create your own packaging</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              onClick={() => setDialog(true)}
            >
              Request pricing
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={topdialog}
          maxWidth={'md'}
        >
          <TwentyOneOver notOverTwentyOne={notOverTwentyOne} closeTopDialog={() => setTopdialog(false)}/>
        </Dialog>
        <Dialog
          open={dialog}
          onClose={() => setDialog(false)}
          maxWidth={'md'}
        >
          <ForHerPackageForm sendEmail={sendEmail}/>
        </Dialog>
     </Container>
    </div>
  )
}
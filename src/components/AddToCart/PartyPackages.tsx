import React from "react"
import { Button, Container, Grid, Typography } from "@mui/material"
import emailjs from '@emailjs/browser'
import { useSnackbar } from "notistack"

//@ts-ignore
import Dialog from "../Dialog"
import RequestPartyPackageForm from "../forms/RequestPartyPackageForm"

// TODO -- Add to Json
const partyPackagesOptions = [
  {
    title: '$125 for 1 dozen chocolate-covered strawberries, 1 dozen pretzels, and 1 dozen rice krispies',
    id: 'party_package_a',
    price: "125.00",
    name: "Party Package A"
  },
  {
    title: '$190 for 3 dozen chocolate-covered strawberies, 1 dozen pretzels, and 1 dozen rice krispies',
    id: 'party_package_b',
    price: "190.00",
    name: "Party Package B"
  },
]

export default function PartyPackages(): JSX.Element {
  const [dialog, setDialog] = React.useState<boolean>(false)
  const {enqueueSnackbar} = useSnackbar()

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
        { partyPackagesOptions.map((ppOption) => {

          const {title, price, name, id } = ppOption
          return (
            <Grid container spacing={2} justifyContent={'center'} key={id} mb={4}>
              <Grid item xs={12} container justifyContent={'center'}>
                <Typography variant="h4" fontWeight={700} align="center">{title}</Typography>
              </Grid>
              <Grid item xs={12} container justifyContent={'center'}>
                <Button
                  variant='contained'
                  sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
                  className="snipcart-add-item"
                  data-item-id={id}
                  data-item-price={price}
                  data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
                  data-item-name={name}
                >
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          )
        })
        }

        <Grid container spacing={2} justifyContent={'center'} mb={4}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h4" fontWeight={700} align="center">Create your own packaging</Typography>
            <Typography variant="h5" fontWeight={700} align="center">Choose between chocolate-covered strawberries, pretzels, rice krispies, oreos, madelines, marshmellows, and fruit platters</Typography>
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
          open={dialog}
          onClose={() => setDialog(false)}
          maxWidth={'md'}
        >
          <RequestPartyPackageForm sendEmail={sendEmail}/>
        </Dialog>
     </Container>
    </div>
  )
}
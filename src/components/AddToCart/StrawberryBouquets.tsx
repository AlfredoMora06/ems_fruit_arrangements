
import { Button, Container, Grid, Typography } from "@mui/material"


export default function StrawberryBouquets(): JSX.Element {

  return (
    <div>
    <Container sx={{marginTop: 5, paddingBottom: 10}}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3" fontWeight={700} align="center">$45 for 1 Dozen Strawberries and 6 real roses</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="dozen_strawberries_six_roses"
            data-item-price="45.00"
            data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
            data-item-name="1 Dozen Strawberries and 6 Real Roses"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={'center'} mt={5}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3" fontWeight={700} align="center">$55 for 1 Dozen Strawberries, 6 real roses and any personalized message</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="dozen_strawberries_six_roses_message"
            data-item-price="55.00"
            data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
            data-item-name="1 Dozen Strawberries, 6 real roses and any personalized message"
            data-item-custom1-name="Personalized Message"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}

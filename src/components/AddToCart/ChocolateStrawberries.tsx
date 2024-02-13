
import { Button, Container, Grid, Typography } from "@mui/material"

import { BuyingOption } from "../../util/BuyingOptions"


type OrderNavbarProps = {
  activeBuyingOption: BuyingOption,
}

export default function ChocolateStrawberries({activeBuyingOption}: OrderNavbarProps): JSX.Element {

  return (
    <Container sx={{marginTop: 5}}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3">$15 for 1/2 Dozen</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="ccs_half_dozen"
            data-item-price="15.00"
            data-item-url="/0/order"
            data-item-description="1/2 Dozen"
            data-item-name="Half a Dozen Chocolate Covered Strawberries"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} justifyContent={'center'} mt={5}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3">$30 for 1 Dozen</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="ccs_dozen"
            data-item-price="30.00"
            data-item-url="/ccs_dozen"
            data-item-description="1 Dozen"
            data-item-name="1 Dozen Chocolate Covered Strawberries"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid> */}
    </Container>
  )
}

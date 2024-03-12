
import { Button, Container, Grid, Typography } from "@mui/material"

import { BuyingOption } from "../../util/BuyingOptions"


type OrderNavbarProps = {
  activeBuyingOption: BuyingOption,
}

export default function ChocolateStrawberries({activeBuyingOption}: OrderNavbarProps): JSX.Element {

  return (
    <div>
    <Container sx={{marginTop: 5, paddingBottom: 10}}>
      <Grid container spacing={2} justifyContent={'center'}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3" fontWeight={700}>$15 for 1/2 Dozen</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="ccs_half_dozen"
            data-item-price="15.00"
            data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
            data-item-description="1/2 Dozen"
            data-item-name="Half a Dozen Chocolate Covered Strawberries"
            data-item-taxes="NJ|NY"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={'center'} mt={5}>
        <Grid item xs={12} container justifyContent={'center'}>
          <Typography variant="h3" fontWeight={700}>$30 for 1 Dozen</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent={'center'}>
          <Button
            variant='contained'
            sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
            className="snipcart-add-item"
            data-item-id="ccs_dozen"
            data-item-price="30.00"
            data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
            data-item-description="1 Dozen"
            data-item-name="1 Dozen Chocolate Covered Strawberries"
            data-item-taxes="NJ|NY"
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}


import { Button, Container, Grid, Typography } from "@mui/material"


export default function FruitArrangements(): JSX.Element {

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$40 for a Small Basket including up to 5 fruits of your choice</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="small_basket_five_fruits"
              data-item-price="40.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Small Basket including up to 5 fruits of your choice"
              data-item-custom1-name="Your 5 Fruits"
              data-item-taxes="NJ|NY"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={'center'} mt={5}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$55 for a Small Basket which includes up to 5 fruits of your choice and chocolate covered strawberries or pineapples</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="small_basket_five_fruits_chocolate"
              data-item-price="55.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Small Basket which includes up to 5 fruits of your choice and chocolate covered strawberries or pineapples"
              data-item-custom1-name="Your 5 Fruits"
              data-item-custom2-name="Chocolate covered strawberries or pineapples?"
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

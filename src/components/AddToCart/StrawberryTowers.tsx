
import { Button, Container, Grid, Typography } from "@mui/material"


export default function StrawberryTowers(): JSX.Element {

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$60 for Small Strawberry Tower</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="small_strawberry_tower"
              data-item-price="60.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Small Strawberry Tower"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={'center'} mt={5}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$150 for Large Strawberry Tower</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="large_strawberry_tower"
              data-item-price="150.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Large Strawberry Tower"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={'center'} mt={5}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$110 for Medium Strawberry Tower</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="medium_strawberry_tower"
              data-item-price="110.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Medium Strawberry Tower"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

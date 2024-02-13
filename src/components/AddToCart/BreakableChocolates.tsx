
import { Button, Container, Grid, Typography } from "@mui/material"


export default function BreakableChocolates(): JSX.Element {

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h4" fontWeight={700} align="center">$30 for Breakable Heart with any personalized message and an item inside 
(candy, chocolate, mini marshmallows)</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="breakable_heart_1"
              data-item-price="30.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Breakable Heart"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

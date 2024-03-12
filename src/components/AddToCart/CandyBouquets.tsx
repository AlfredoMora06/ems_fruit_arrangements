
import { Button, Container, Grid, Typography } from "@mui/material"


export default function CandyBouquets(): JSX.Element {

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} container justifyContent={'center'}>
            <Typography variant="h3" fontWeight={700} align="center">$35 for Candy Bouquets</Typography>
          </Grid>
          <Grid item xs={12} container justifyContent={'center'}>
            <Button
              variant='contained'
              sx={{backgroundColor: '#F484BB', borderRadius: 20, fontSize: 20}}
              className="snipcart-add-item"
              data-item-id="candy_bouquets"
              data-item-price="35.00"
              data-item-url="https://65cada75efec34d9ed865ad0.mockapi.io/ems/v1/products"
              data-item-name="Candy Bouquet"
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

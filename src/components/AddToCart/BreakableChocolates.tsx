
import { Button, Container, Grid, Typography } from "@mui/material"

const breakableChocolateOptions = [
  {
    title: '$30 for Breakable Heart with any personalized message and an item inside (candy, chocolate, mini marshmallows)',
    id: 'breakable_heart_1',
    price: "30.00",
    name: "Breakable Heart"
  },
  {
    title: '$45 for Breakable Heart/Teddy Bear and 6 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows',
    id: 'breakable_heart_2',
    price: "45.00",
    name: "Breakable Hear w/6 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows"
  },
  {
    title: '$75 for Breakable Heart/Teddy Bear and 12 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows and Roses',
    id: 'breakable_heart_2',
    price: "75.00",
    name: "Breakable Heart/Teddy Bear w/12 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows and Roses"
  },
  {
    title: '$90 for Breakable Heart/Teddy Bear and 12 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows, Roses and Mini Chocolate Bars and other Chocolate Molds',
    id: 'breakable_heart_3',
    price: "90.00",
    name: "Breakable Heart/Teddy Bear and 12 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows, Roses and Mini Chocolate Bars and other Chocolate Molds"
  },
  {
    title: "$2.50 per additional treats included.",
    id: 'additional_treat',
    price: "2.50",
    name: "Additional Treat"
  },
  {
    title: "$15 for addition of roses/flowers",
    id: "additional_flowers",
    price: "15.00",
    name: "Additional Flowers"
  },
  {
    title: "$15 for addition of mini chocolate bars and other chocolate molds",
    id: "additional_chocolate",
    price: "15.00",
    name: "Additional Chocolate"
  }
]


export default function BreakableChocolates(): JSX.Element {

  return (
    <div>
      <Container sx={{marginTop: 5, paddingBottom: 10}}>
        { breakableChocolateOptions.map((breakbleChoco) => {

          const {title, price, name, id } = breakbleChoco
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
                  data-item-taxes="NJ|NY"
                >
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          )
        })
        }
        {/*  */}
        {/* 
$60 for Breakable Heart/Teddy Bear and 12 Strawberries, Pretzel Rods, Rice Krispy, Madeline, Oreo, or Marshmallows */}
      </Container>
    </div>
  )
}

import { Container, Grid, Typography, useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

import '../App.css'
import { BuyingOption } from "../util/BuyingOptions"

type PurchaseItemViewProps = {
  activeBuyingOption: BuyingOption,
}

export default function PurchaseItemView({activeBuyingOption}: PurchaseItemViewProps):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <div>
        <Container className="fade-in-bottom">
          <Grid container justifyContent={'center'} mt={5}>
            <Grid item xs={12}>
              <Typography
                align="center"
                fontSize={isMobile ? 30 : 55} 
                fontWeight={700} 
                sx={{color: "#D89D44"}}
              >
                {activeBuyingOption.title}
              </Typography>
            </Grid>

            { !!activeBuyingOption.images 
              ? 
                <ImageList 
                  sx={{
                    gridAutoFlow: "column", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important", 
                    gridAutoColumns: "minmax(160px, 1fr)" 
                  }} 
                  rowHeight={activeBuyingOption.tall ? 550 : 300}
                >
                  {activeBuyingOption.images.map(image => {
                    return (
                      <ImageListItem
                        key={image} 
                        cols={3} 
                        sx={{
                          objectFit: 'contain', 
                          width: activeBuyingOption.tall ? '70%': '90%',
                          borderRadius: 50
                        }}
                      >
                        <img
                          src={image}
                          alt='title'
                          style={{borderRadius: 20}}
                        />
                      </ImageListItem>
                    )
                  })}
                </ImageList>
              : <></>
            }

            
            { !!activeBuyingOption.images2 
              ? 
                <Grid container justifyContent={'center'}>
                  {activeBuyingOption.images2.map(image => {
                    return (
                      <Grid
                        key={image} 
                        item
                        xs={6}
                        md={4}
                        p={4}
                        container
                        justifyContent={'center'}
                      >
                        <img
                          src={image}
                          alt='title'
                          style={{borderRadius: 20}}
                          width={'100%'}
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              : <></>
            }
          </Grid>
        </Container>
      </div>
    </>
  )
}

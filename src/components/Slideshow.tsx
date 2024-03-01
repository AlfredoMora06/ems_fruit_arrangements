import { Grid, useTheme, useMediaQuery } from "@mui/material"
import Carousel from 'react-material-ui-carousel'


export default function Slideshow({images}: {images: string[]}):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid container>
      <Grid item xs={12} marginTop={8} marginBottom={10}>
        <Carousel
          duration={1000}
          animation="slide" 
          navButtonsAlwaysVisible 
          indicators={true}
          navButtonsProps={{style: {backgroundColor: "rgba(189, 64, 46, 0.75)" }}}
        >
          {
            images.map((item, index) => {
              return (
                <div key={`imagen-${index}`}>
                  <img 
                    src={item} 
                    alt={`imagen-${index}`} 
                    style={{
                      width: "100%", 
                      borderRadius: 50,
                      minHeight: isMobile ? 400 : 405,
                      maxHeight: isMobile ? 415 : 420, 
                      objectFit: "contain", 
                    }}
                  />
                </div>
              )
            })
          }
        </Carousel>
      </Grid>
    </Grid>
  )
}

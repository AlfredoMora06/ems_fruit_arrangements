import { Container, Grid } from "@mui/material"
import { useTranslation } from "react-i18next"

import Navbar from "../components/Navbar"
import ReviewCard from "../components/ReviewCard"
import '../App.css'
import Footer from "../components/Footer"


export default function Reviews():JSX.Element {
  const {t} = useTranslation("common")

  const reviews: string[] = [
    t('Reviews.reviewOne'),
    t('Reviews.reviewTwo'),
    t('Reviews.reviewThree'),
    t('Reviews.reviewFour'),
    t('Reviews.reviewFive'),
    t('Reviews.reviewSix'),  
  ]

  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          paddingBottom: 50,
          minHeight: '100vh'
        }}
      >
        <Navbar />

        <Container sx={{pt: 6}} className="fade-in-bottom">
          <Grid container spacing={3}>
            { reviews.map((review) => {
              return (
                <ReviewCard review={review} />
              )
            })}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  )
}

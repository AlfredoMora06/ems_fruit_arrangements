import { Container, Grid } from "@mui/material"

import Navbar from "../components/Navbar"
import ReviewCard from "../components/ReviewCard"
import '../App.css'


const reviews: string[] = [
  'Good morning, thank you so much again!! Everything came out so beautiful & your treats were so pretty and tasted delicious🥹🥰🥰 You did such a good job, I couldn’t be happier❤️',
  'Hey! I wanted to say thank you and that it came out amazing! My girlfriend and I loved it.',
  'Girl the strawberries you made for me were BEAUTIFUL! THANK YOU! My mom was the one that ordered them from you❤️',
  'I know it’s a complicated order, but I figured if there’s anyone who can figure it out, it’d be with your business lol.',
  'Omg thank goodness you got pictures because I was so busy that I barely got to see them😭😭😭😭😭but omg they came out so gorgeous thank you so much prima we love you!! Everything was GONEEEE!',
  'GIRLLLLLL! OH MY GOOODNESSSSSSSS! I SWEARRR YOU ARE SOMETHING ELSEEE! YOU MAKE MY DREAMS INTO REALITY! THIS LOOKS SO GOOD! You always go above and beyond, thank you🥹🤎🫶🏽',
]

export default function Reviews():JSX.Element {
  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          paddingBottom: 20,
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
    </>
  )
}

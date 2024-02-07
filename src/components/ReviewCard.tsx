import { Grid, Paper, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star'


export default function ReviewCard({review}:{review: string}):JSX.Element {
  return (
    <Grid item xs={12} md={4} display={'flex'} mb={4}>
      <Paper 
        elevation={1} 
        sx={{
          background:  'linear-gradient(#FFE8F5 0 0) padding-box, linear-gradient(to right, #FFFFFF, #FD20A5) border-box',
          backgroundColor: '#FFE8F5', 
          height: '95%', 
          p: 2,
          border: '2px solid transparent',
          borderRadius: 10, 
        }} 
      >
        <Grid item xs={12} container justifyContent={'center'} mb={2}>
          <StarIcon sx={{color: '#FD20A5'}}/>
          <StarIcon sx={{color: '#FD20A5'}}/>
          <StarIcon sx={{color: '#FD20A5'}}/>
          <StarIcon sx={{color: '#FD20A5'}}/>
          <StarIcon sx={{color: '#FD20A5'}}/>
        </Grid>

        <Grid item xs={12} container px={3}>
          <Typography variant='h6' fontWeight={700}>
            {review}
          </Typography>
        </Grid>

      </Paper>
    </Grid>
  )
}

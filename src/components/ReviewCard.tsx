import { Grid, Paper, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star'


export default function ReviewCard({review}:{review: string}):JSX.Element {
  return (
    <Grid item xs={12} md={4} display={'flex'} mb={4}>
      <Paper sx={{backgroundColor: '#FFE8F5', border: 'solid', borderRadius: 5, height: '95%', p: 2}} >
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

import Box from "@mui/material/Box"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import InstagramIcon from '@mui/icons-material/Instagram'


export default function Footer(): JSX.Element {

  return (
    <>
      <div style={{backgroundColor: "#FDC8E1", paddingBottom: 30 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
              <Grid item container xs={12} justifyContent={"center"}>
                <Grid item xs={12} paddingTop={1}>
                  <Typography variant="h4" align="center" fontWeight={700} sx={{color: "#6B3F18"}}>
                    Follow on Instagram for updates and future giveaways!
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"} paddingTop={2}>
                  <InstagramIcon
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/emsfruitarrangements",
                        "_blank"
                      )
                    }
                    sx={{ fontSize: 50, color: 'white', cursor: "pointer", "&:hover": {color: '#D83583'} }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

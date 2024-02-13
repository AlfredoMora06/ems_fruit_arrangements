import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import { BuyingOption } from "../util/BuyingOptions"


type OrderNavbarProps = {
  activeBuyingOption: BuyingOption,
  setActiveBuyingOption: (activeBuyingOption: BuyingOption) => void,
  buyingOptions: BuyingOption[]
}

export default function OrderNavbar({activeBuyingOption, setActiveBuyingOption, buyingOptions}: OrderNavbarProps): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <AppBar
      position="static"
      sx={{ background: "#F484BB", boxShadow: "none", paddingY: isMobile ? 0 : 1, paddingX: isMobile ? 0 : 4, marginTop: 5 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Grid item xs={1}></Grid>
            <Grid container item xs={10} spacing={2} justifyContent={"center"} alignContent={"center"} ml={8}>
              {buyingOptions.map((buyingOption, index) => {
                const samePathname = activeBuyingOption.title === buyingOption.title
                
                return (
                  <Grid item key={index} style={{ marginBottom: 2, marginTop: 2 }}>
                    <Button
                      variant="text"
                      onClick={() => setActiveBuyingOption(buyingOption)}
                      sx={{
                        color: samePathname ? "#945A02" : "#FFFFFF",
                        display: "block",
                        fontSize: 15,
                        fontWeight: 700,
                        textTransform: "capitalize",
                        fontFamily: "Lora"
                      }}
                    >
                      {buyingOption.title}
                    </Button>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

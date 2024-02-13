import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { Grid, Menu, MenuItem } from "@mui/material"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import { BuyingOption } from "../util/BuyingOptions"


type OrderNavbarProps = {
  activeBuyingOption: BuyingOption,
  setActiveBuyingOption: (activeBuyingOption: BuyingOption) => void,
  buyingOptions: BuyingOption[]
}

export default function OrderNavbar({activeBuyingOption, setActiveBuyingOption, buyingOptions}: OrderNavbarProps): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }


  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleChoose = (buyingOption: BuyingOption) => {
    setActiveBuyingOption(buyingOption)
    setAnchorEl(null);
  }

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

          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <Grid container>
              <Grid item xs={12} container justifyContent={'center'}>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  endIcon={<ArrowDropDownIcon/>}
                  sx={{color: '#FFFFFF', fontWeight: 700,}}
                >
                  Order
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  sx={{"& .MuiMenu-paper": 
                  { backgroundColor: "#F484BB", color: 'white' },
                  }}    
                >
                  {
                    buyingOptions.map((buyingOption) => {

                      return (
                        <MenuItem sx={{justifyContent: 'center'}}
                          key={buyingOption.title} 
                          onClick={() => handleChoose(buyingOption)}
                        >
                          {buyingOption.title}
                        </MenuItem>
                      )
                    })
                  }
                </Menu>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

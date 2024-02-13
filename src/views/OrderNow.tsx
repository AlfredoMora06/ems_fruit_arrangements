import React from "react"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import Navbar from "../components/Navbar"
//@ts-ignore
import BERRY_TEMPLATES from "../assets/BERRY_TEMPLATES.png"
import Footer from "../components/Footer"
import OrderNavbar from "../components/OrderNavbar"
import PurchaseItemView from "../components/PurchaseItemView"
import { BuyingOption, buyingOptions } from "../util/BuyingOptions"
import ChocolateStrawberries from "../components/AddToCart/ChocolateStrawberries"


export default function OrderNow():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [activeBuyingOption, setActiveBuyingOption] = React.useState<BuyingOption>(buyingOptions[0])

  const { title } = activeBuyingOption

  return (
    <>
      <div style={{ background: `#FFE0F1`,}}>
        <Navbar hideOrderNow={true}/>
        <div
          style={{
            minHeight: '100vh',
            backgroundImage: `url(${BERRY_TEMPLATES})`,
            backgroundSize: 'cover',
            backgroundPosition: isMobile ? 'right 28% bottom 50%' : 'center'
          }}
        >
          <OrderNavbar 
            activeBuyingOption={activeBuyingOption}
            setActiveBuyingOption={setActiveBuyingOption}
            buyingOptions={buyingOptions}
          />

          <PurchaseItemView
            activeBuyingOption={activeBuyingOption}
          />

          { title === 'Chocolate Covered Strawberries'
            ? <ChocolateStrawberries activeBuyingOption={activeBuyingOption} />
            : <></>
          }
          
        
        </div>
      </div>
      <Footer />
    </>
  )
}

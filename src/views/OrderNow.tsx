import React from "react"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import OrderNavbar from "../components/OrderNavbar"
import PurchaseItemView from "../components/PurchaseItemView"
import { BuyingOption, buyingOptions } from "../util/BuyingOptions"
import ChocolateStrawberries from "../components/AddToCart/ChocolateStrawberries"
import StrawberryBouquets from "../components/AddToCart/StrawberryBouquets"
import CandyBouquets from "../components/AddToCart/CandyBouquets"
import FruitArrangements from "../components/AddToCart/FruitArrangements"
import StrawberryTowers from "../components/AddToCart/StrawberryTowers"
import BreakableChocolates from "../components/AddToCart/BreakableChocolates"
import PartyPackages from "../components/AddToCart/PartyPackages"
import ForHim from "../components/AddToCart/ForHim"
import ForHer from "../components/AddToCart/ForHer"


export default function OrderNow():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [activeBuyingOption, setActiveBuyingOption] = React.useState<BuyingOption>(buyingOptions[0])

  const { title, background } = activeBuyingOption

  return (
    <>
      <div style={{ background: `#FFE0F1`}}>
        <Navbar hideOrderNow={true}/>
        <div
          style={{
            minHeight: '100vh',
            backgroundImage: `url(${background})`,
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
          {
            title === 'Strawberry Bouquets'
            ? <StrawberryBouquets />
            : <></>
          }
          {
            title === 'Fruit Arrangements'
            ? <FruitArrangements />
            : <></>
          }
          {
            title === 'Breakable Chocolates'
            ? <BreakableChocolates />
            : <></>
          }
          {
            title === 'Strawberry Towers'
            ? <StrawberryTowers />
            : <></>
          }
          {
            title === 'Candy Bouquets'
            ? <CandyBouquets />
            : <></>
          }
          {
            title === 'Party Packages'
            ? <PartyPackages />
            : <></>
          }
          {
            title === 'For Him'
            ? <ForHim setActiveBuyingOption={setActiveBuyingOption}/>
            : <></>
          }
          {
            title === 'For Her'
            ? <ForHer setActiveBuyingOption={setActiveBuyingOption}/>
            : <></>
          }
          
        
        </div>
      </div>
      <Footer />
    </>
  )
}

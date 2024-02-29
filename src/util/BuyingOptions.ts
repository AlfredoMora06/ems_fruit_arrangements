//@ts-ignore
import BERRY_TEMPLATES from "../assets/BERRY_TEMPLATES.png"
//@ts-ignore
import TULIPS from "../assets/TULIPS.png"
//@ts-ignore
import FRUITS from "../assets/FRUITS.png"
//@ts-ignore
import CHOCOLATE from "../assets/CHOCOLATE.png" 
//@ts-ignore
import TOWERS from "../assets/TOWERS.png"
//@ts-ignore
import CANDY from "../assets/CANDY.png"
//@ts-ignore
import CCS1 from "../assets/CCS/CCS1.png"
//@ts-ignore
import CCS2 from "../assets/CCS/CCS2.png"
//@ts-ignore
import CCS3 from "../assets/CCS/CCS3.png"
//@ts-ignore
import CCS4 from "../assets/CCS/CCS4.png"
//@ts-ignore
import CCS5 from "../assets/CCS/CCS5.png"
//@ts-ignore
import FB1 from "../assets/FB/FB1.png"
//@ts-ignore
import FB2 from "../assets/FB/FB2.png"
//@ts-ignore
import FB3 from "../assets/FB/FB3.png"
//@ts-ignore
import FB4 from "../assets/FB/FB4.png"
//@ts-ignore
import CB1 from "../assets/CB/CB1.png"
//@ts-ignore
import CB2 from "../assets/CB/CB2.png"
//@ts-ignore
import ST1 from "../assets/ST/ST1.png"
//@ts-ignore
import ST2 from "../assets/ST/ST2.png"
//@ts-ignore
import ST3 from "../assets/ST/ST3.png"
//@ts-ignore
import FA1 from "../assets/FA/FA1.png"
//@ts-ignore
import FA2 from "../assets/FA/FA2.png"
//@ts-ignore
import FA3 from "../assets/FA/FA3.png"
//@ts-ignore
import FA4 from "../assets/FA/FA4.png"
//@ts-ignore
import FA5 from "../assets/FA/FA5.png"
//@ts-ignore
import FA6 from "../assets/FA/FA6.png"
//@ts-ignore
import BH1 from "../assets/BH/BH1.png"
//@ts-ignore
import BH2 from "../assets/BH/BH2.png"
//@ts-ignore
import BH3 from "../assets/BH/BH3.png"
//@ts-ignore
import BH4 from "../assets/BH/BH4.png"
//@ts-ignore
import BH5 from "../assets/BH/BH5.png"
//@ts-ignore
import BH6 from "../assets/BH/BH6.png"
//@ts-ignore
import TB1 from "../assets/TB/TB1.png"
//@ts-ignore
import TB2 from "../assets/TB/TB2.png"
//@ts-ignore
import TB3 from "../assets/TB/TB3.png"
//@ts-ignore
import PP1 from "../assets/PP/PP1.jpg"
//@ts-ignore
import PP2 from "../assets/PP/PP2.jpg"
//@ts-ignore
import PP3 from "../assets/PP/PP3.jpg"
//@ts-ignore
import PP4 from "../assets/PP/PP4.jpg"
//@ts-ignore
import PP5 from "../assets/PP/PP5.jpg"
//@ts-ignore
import PP6 from "../assets/PP/PP6.jpg"
//@ts-ignore
import PP7 from "../assets/PP/PP7.jpg"
//@ts-ignore
import PP8 from "../assets/PP/PP8.jpg"
//@ts-ignore
import PP9 from "../assets/PP/PP9.jpg"
//@ts-ignore
import PP10 from "../assets/PP/PP10.jpg"
//@ts-ignore
import PP11 from "../assets/PP/PP11.jpg"
//@ts-ignore
import PP12 from "../assets/PP/PP12.jpg"
//@ts-ignore
import PP13 from "../assets/PP/PP13.jpg"
//@ts-ignore
import PP14 from "../assets/PP/PP14.jpg"
//@ts-ignore
import PP15 from "../assets/PP/PP15.jpg"
//@ts-ignore
import PP16 from "../assets/PP/PP16.jpg"
//@ts-ignore
import PP17 from "../assets/PP/PP17.jpg"
//@ts-ignore
import PP18 from "../assets/PP/PP18.jpg"
//@ts-ignore
import PP19 from "../assets/PP/PP19.jpg"
//@ts-ignore
import PP20 from "../assets/PP/PP20.jpg"
//@ts-ignore
import PP21 from "../assets/PP/PP21.jpg"
//@ts-ignore
import PP22 from "../assets/PP/PP22.jpg"
//@ts-ignore
import PP23 from "../assets/PP/PP23.jpg"
//@ts-ignore
import PP24 from "../assets/PP/PP24.jpg"
//@ts-ignore
import PP25 from "../assets/PP/PP25.jpg"
//@ts-ignore
import PP26 from "../assets/PP/PP26.jpg"
//@ts-ignore
import PP27 from "../assets/PP/PP27.jpg"
//@ts-ignore
import PP28 from "../assets/PP/PP28.jpg"


export type BuyingOptionTitle =  'Chocolate Covered Strawberries' | 'Strawberry Bouquets' | 
'Fruit Arrangements' | 'Breakable Chocolates' | 'Strawberry Towers' | 'Candy Bouquets' | 
'Party Packages' | 'For Him' | 'For Her'

export type BuyingOption = {
  title: BuyingOptionTitle,
  background: string,
  images: string[],
  tall?: boolean
  images2?: string[],
}

export const chocolateCoveredStrawberries: BuyingOption = {
  title: 'Chocolate Covered Strawberries',
  images: [CCS1, CCS2, CCS3, CCS4, CCS5],
  background: BERRY_TEMPLATES,
}

export const buyingOptions: BuyingOption[] = [
  chocolateCoveredStrawberries,
  {
    title: 'Strawberry Bouquets',
    images: [FB1, FB2, FB3, FB4],
    background: TULIPS,
    tall: true
  },
  {
    title: 'Fruit Arrangements',
    images: [FA1, FA2, FA3, FA4, FA5, FA6],
    background: FRUITS,
    tall: true
  },
  {
    title: 'Breakable Chocolates',
    background: CHOCOLATE,
    images: [BH1, BH2, BH3, BH4, BH5, BH6],
    images2: [TB1, TB2, TB3]
  },
  {
    title: 'Strawberry Towers',
    images: [ST1, ST2, ST3],
    tall: true,
    background: TOWERS
  },
  {
    title: 'Candy Bouquets',
    images: [CB1, CB2],
    background: CANDY,
    tall: true
  },
  // TODO - Slideshow
  {
    title: 'Party Packages',
    images: [PP1,PP2,PP3,PP4,PP5,PP6,PP7,PP8,PP9,PP10,PP11,PP12,PP13,PP14,PP15,PP16,PP17,PP18,PP19,PP20,PP21,PP22,PP23,PP24,PP25,PP26,PP27,PP28],
    background: BERRY_TEMPLATES,
    tall: true
  },
  // TODO - Slideshow
  {
    title: 'For Him',
    // TODO - Images Missing
    images: [],
    background: CHOCOLATE,
  },
  // TODO - Slideshow
  {
    title: 'For Her',
    // TODO - Images Missing
    images: [],
    background: TULIPS,
  }
]
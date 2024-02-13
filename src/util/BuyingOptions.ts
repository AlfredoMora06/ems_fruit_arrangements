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

export type BuyingOptionTitle =  'Chocolate Covered Strawberries' | 'Strawberry Bouquets' | 
'Fruit Arrangements' | 'Breakable Chocolates' | 'Strawberry Towers' | 'Candy Bouquets' 

export type BuyingOption = {
  title: BuyingOptionTitle,
  images?: string[],
  tall?: boolean
}

export const buyingOptions: BuyingOption[] = [
  {
    title: 'Chocolate Covered Strawberries',
    images: [CCS1, CCS2, CCS3, CCS4, CCS5]
  },
  {
    title: 'Strawberry Bouquets',
    images: [FB1, FB2, FB3, FB4],
    tall: true
  },
  {
    title: 'Fruit Arrangements',
  },
  {
    title: 'Breakable Chocolates'
  },
  {
    title: 'Strawberry Towers',
    images: [ST1, ST2, ST3],
    tall: true
  },
  {
    title: 'Candy Bouquets',
    images: [CB1, CB2],
    tall: true
  }
]
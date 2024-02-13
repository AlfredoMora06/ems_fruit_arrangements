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


export type BuyingOptionTitle =  'Chocolate Covered Strawberries' | 'Strawberry Bouquets' | 
'Fruit Arrangements' | 'Breakable Chocolates' | 'Strawberry Towers' | 'Candy Bouquets' 

export type BuyingOption = {
  title: BuyingOptionTitle,
  background: string,
  images?: string[],
  tall?: boolean
}

export const buyingOptions: BuyingOption[] = [
  {
    title: 'Chocolate Covered Strawberries',
    images: [CCS1, CCS2, CCS3, CCS4, CCS5],
    background: BERRY_TEMPLATES,
  },
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
    background: CHOCOLATE
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
  }
]
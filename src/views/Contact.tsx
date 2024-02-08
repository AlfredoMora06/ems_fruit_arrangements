// import { useSnackbar } from 'notistack'
// import emailjs from '@emailjs/browser'

import Navbar from "../components/Navbar"
//@ts-ignore
import Map from "../assets/Map.png"
import ContactUsForm from "../components/forms/ContactUsForm"
import Footer from "../components/Footer"


export default function Contact():JSX.Element {
  // const {enqueueSnackbar} = useSnackbar()

  const sendEmail = async (values: any): Promise<void> => {
    // await emailjs.send(
    //   `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, 
    //   `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, 
    //   values, 
    //   `${process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}`
    // )
    // .then((result) => {
    //   if(result.status === 200){
    //     enqueueSnackbar('Email Sent Succesfully', {variant: "success"})
    //   } else {
    //     enqueueSnackbar('Email could not be sent, please try again later', {variant: "error"})
    //   }
    // }, () => {
    //   enqueueSnackbar('Email could not be sent, please try again later', {variant: "error"})
    // })
  }

  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          paddingBottom: 50
        }}
      >
        <Navbar />
        <img width="100%" src={Map} alt="Map" style={{maxHeight: '13vh', objectFit: 'cover'}}/>
        <ContactUsForm sendEmail={sendEmail}/>
      </div>
      <Footer />
    </>
  )
}

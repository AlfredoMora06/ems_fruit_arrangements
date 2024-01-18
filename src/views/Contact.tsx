import Navbar from "../components/Navbar"

//@ts-ignore
import Map from "../assets/Map.png"
import ContactUsForm from "../components/forms/ContactUsForm"

export default function Contact():JSX.Element {
  return (
    <>
      <div
        style={{
          background: `#FFE0F1`,
          height: "100vh" 
        }}
      >
        <Navbar />
        <img width="100%" src={Map} alt="Map" />
        <ContactUsForm />
      </div>
    </>
  )
}

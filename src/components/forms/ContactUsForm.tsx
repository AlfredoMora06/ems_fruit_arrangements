import { Button, Container, Grid, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

import TextField from "../Fields/TextField"
import TextArea from "../Fields/TextArea"
import '../../App.css'

type ContactUsFormProps = {
  sendEmail: (values: any) => Promise<void>
}

export default function ContactUsForm({sendEmail}: ContactUsFormProps):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const typographyStyle = {color: "#FF53A5", fontSize: isMobile ? 17 : 22, fontWeight: 700}

  
  return (
    <Container className="fade-in-bottom">
      <Grid container pt={1}>
        <Grid item xs={12}>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Have a question or inquiry?
          </Typography>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            Send us a message and we’ll get back to you as soon as possible!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={{
              from_name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={Yup.object().shape({
              from_name: Yup.string().required('Name is required'),
              email: Yup.string().required('Email is required'),
              phone: Yup.string().required('Phone is required'),
              message: Yup.string().required('Message is required'),
            })}
            validateOnMount={true}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              await sendEmail(values)
              setSubmitting(false)
              resetForm()
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              isValid,
              touched,
              values
            }) => {
              return (
                <Form>
                  <Grid container spacing={1} justifyContent={"center"}>
                    <Grid item xs={12} md={10}>
                      <Typography style={typographyStyle}>
                        Name
                      </Typography>
                      <TextField
                        error={Boolean(touched.from_name && errors.from_name)}
                        helperText={touched.from_name && errors.from_name}
                        name="from_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.from_name}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <Typography style={typographyStyle}>
                        Email
                      </Typography>
                      <TextField
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <Typography style={typographyStyle}>
                        Phone
                      </Typography>
                      <TextField
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <Typography style={typographyStyle}>
                        Message
                      </Typography>
                      <TextArea
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                        name="message"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.message}
                      />
                    </Grid>
                    <Grid item xs={12} md={10} container justifyContent={"center"} mt={isMobile ? 2 : 0}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#D89D44",
                          fontSize: isMobile ? 18 : 26,
                          fontWeight: 700,
                          borderRadius: 3,
                          paddingX: isMobile ? 4 : 8
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>

                  </Grid>
                </Form>
              )
            }}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  )
}

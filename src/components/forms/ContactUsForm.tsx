import { Button, Container, Grid, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import TextField from "../Fields/TextField"
import TextArea from "../Fields/TextArea"


export default function ContactUsForm():JSX.Element {
  const typographyStyle = {color: "#FF53A5", fontSize: 25, fontWeight: 700}
  return (
    <Container>
      <Grid container pt={5}>
        <Grid item xs={12}>
          <Typography align="center" fontSize={24} fontWeight={700} sx={{color: "#945A02"}}>
            Have a question or inquiry?
          </Typography>
          <Typography align="center" fontSize={24} fontWeight={700} sx={{color: "#945A02"}}>
            Send us a message and we’ll get back to you as soon as possible!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required('Name is required'),
              email: Yup.string().required('Email is required'),
              phone: Yup.string().required('Phone is required'),
              message: Yup.string().required('Message is required'),
            })}
            validateOnMount={true}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)

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
                  <Grid container spacing={3} pt={5} justifyContent={"center"}>
                    <Grid item xs={12} md={10}>
                      <Typography style={typographyStyle}>
                        Name
                      </Typography>
                      <TextField
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
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
                    <Grid item xs={12} md={10} container justifyContent={"center"}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          color: "white",
                          backgroundColor: "#D89D44",
                          fontSize: 26,
                          fontWeight: 700,
                          borderRadius: 3,
                          paddingX: 8
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

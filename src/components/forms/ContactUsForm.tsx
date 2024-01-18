import { Container, Grid, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import TextField from "../Fields/TextField"


export default function ContactUsForm():JSX.Element {
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
              name: Yup.string().required(),
              email: Yup.string().required()

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
                      <TextField
                        label={"Name"}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <TextField
                        label={"Email"}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <TextField
                        label={"Phone"}
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                      />
                    </Grid>
                    <Grid item xs={12} md={10}>
                      <TextField
                        label={"Message"}
                        name="message"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.message}
                      />
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

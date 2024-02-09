import React from "react"
import { Button, Container, Grid, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useTheme } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { getProfile } from "../../store/features/profileSlice"
import TextField from "../Fields/TextField"
import TextArea from "../Fields/TextArea"
import '../../App.css'


type ContactUsFormProps = {
  sendEmail: (values: any) => Promise<void>
}

export default function ContactUsForm({sendEmail}: ContactUsFormProps):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const profile = useSelector(getProfile)
  const {i18n, t} = useTranslation("common")
  const typographyStyle = {color: "#FF53A5", fontSize: isMobile ? 17 : 22, fontWeight: 700}

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  
  return (
    <Container className="fade-in-bottom">
      <Grid container pt={1}>
        <Grid item xs={12}>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            {t('ContactUs.titleOne')}
          </Typography>
          <Typography align="center" fontSize={isMobile ? 18 : 24} fontWeight={700} sx={{color: "#945A02"}}>
            {t('ContactUs.titleTwo')}
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
              from_name: Yup.string().required(t('ContactUs.nameRequired')),
              email: Yup.string().required(t('ContactUs.emailRequired')),
              phone: Yup.string().required(t('ContactUs.phoneRequired')),
              message: Yup.string().required(t('ContactUs.messageRequired')),
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
                        {t('ContactUs.name')}  
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
                        {t('ContactUs.email')}
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
                        {t('ContactUs.phone')}
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
                        {t('ContactUs.message')}
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
                        {t('ContactUs.submit')}
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

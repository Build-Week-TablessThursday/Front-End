import React from 'react'
import { Form, ErrorMessage } from 'formik'
import { FlexContainer, H1, P, Button } from '../../EmoTools'
import { EmoField } from '../../EmoTools'

const Login = ({ isSubmitting, touched, errors }) => (
  <FlexContainer fdc aic acc mainColor margin='20px 0'>
    <H1>Login</H1>
    <Form>
      <FlexContainer margin='50px 0 0' fdc aic mainColor>
        {(touched.username && errors.username && (
          <ErrorMessage name='username' component={P} />
        )) || <P>Enter Username</P>}
        <EmoField type='username' name='username' />
        {(touched.password && errors.password && (
          <ErrorMessage name='password' component={P} />
        )) || <P>Enter Password</P>}
        <EmoField type='password' name='password' />
        <Button type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </FlexContainer>
    </Form>
  </FlexContainer>
)

export default Login

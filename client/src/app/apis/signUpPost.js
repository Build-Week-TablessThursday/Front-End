import axiosWithAuth from '../utils/axiosWithAuth'

const signUpPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/register', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      redirect()
    })
    .catch(err => console.log(err))
}
export default signUpPost

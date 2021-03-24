export default function ({
  store,
  redirect,
  app
}) {
  const token = app.$cookies.get('token')
  // If the user is not authenticated
  if (!token) {
    return redirect('/login')
  }
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
}

import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const {state} = useLocation();
    console.log('Estado desde la ruta privada', state)
  return (
    state?.logged ? children : <Navigate to='/login'/>
  )
}

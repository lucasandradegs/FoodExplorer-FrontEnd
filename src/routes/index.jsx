import { BrowserRouter } from "react-router-dom"
import { useAuth } from "../hooks/auth"

import { UserRoutes } from "./user.routes"
import { AuthRoutes } from "./auth.routes"
import { AdminRoutes } from "./admin.routes"

import { USER_ROLE } from '../utils/roles';

export function Routes() {
    const { user } = useAuth()

    function AcessRoute() {
        switch (user.role) {
    
          case USER_ROLE.ADMIN:
            return <AdminRoutes />
            
          case USER_ROLE.CUSTOMER:
            return <UserRoutes />
    
          default:
            return <UserRoutes />
        }
      }

    return (
        <BrowserRouter>
            { user ? <AcessRoute /> : <AuthRoutes />}
        </BrowserRouter>
    )
}
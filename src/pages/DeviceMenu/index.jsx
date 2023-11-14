import { HeaderMenu } from "../../components/HeaderMenu";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { FiSearch } from 'react-icons/fi'
import { Footer } from "../../components/Footer";

import { USER_ROLE } from "../../utils/roles"
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export function DeviceMenu() {
    const { user, signOut } = useAuth()

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return (
        <Container>
            <HeaderMenu />
            {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <div className="main">
                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                    <h2 onClick={handleSignOut}>Sair</h2>
                </div>
            }
            {[USER_ROLE.ADMIN].includes(user.role) &&
                <div className="main">
                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                    <Link to={`/new`}>
                        <h2>Novo prato</h2>
                    </Link>
                    <h3 onClick={handleSignOut}>Sair</h3>
                </div>
            }
            <Footer />
        </Container>
    )
}
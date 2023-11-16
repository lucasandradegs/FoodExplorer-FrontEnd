import { Button } from "../Button";
import { Container, UserContent, AdminContent, Left, Middle, Right } from "./styles";
import { PiReceipt } from 'react-icons/pi'
import { GoSignOut } from 'react-icons/go'
import { FiMenu } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Header({ children }) {
    const { user, signOut } = useAuth()

    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    return (

        <Container>
            {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <UserContent>
                    <Left>
                        <Link to="/menu">
                            <span><FiMenu size={24} /></span>
                        </Link>
                        <Link to={"/"}>
                            <div className="leftSideDesktop">
                                <img src="/images/explorer.svg" alt="" />
                                <h2>doce maria</h2>
                            </div>
                        </Link>

                    </Left>

                    <Middle>
                        <div className="middleSideDesktop">
                            {children}
                        </div>

                        <img src="/images/explorer.svg" alt="" />
                        <h2>doce maria</h2>

                    </Middle>

                    <Right>

                        <span><PiReceipt size={26} /></span>
                        <label htmlFor="npedidos">
                            <input
                                id="npedidos"
                            />
                        </label>
                        <p>0</p>

                        <div className="rightSideDesktop">
                            <Button icon={PiReceipt} title="Pedidos (0)" />
                            <span><GoSignOut size={22} onClick={handleSignOut} /></span>
                        </div>
                    </Right>
                </UserContent>
            }

            {[USER_ROLE.ADMIN].includes(user.role) &&
                <AdminContent>
                    <Left>
                        <Link to="/menu">
                            <span><FiMenu size={24} /></span>
                        </Link>
                        <Link to={"/"}>
                            <div className="leftSideDesktop">
                                <img src="/images/explorer.svg" alt="" />
                                <h2>doce maria</h2>
                                <span>admin</span>
                            </div>
                        </Link>

                    </Left>

                    <Middle>
                        <div className="middleSideDesktop">
                            {children}
                        </div>

                        <img src="/images/explorer.svg" alt="" />
                        
                        <div className="foodExplorerTitle">
                            <Link to={`/`}>
                                <h2>Doce Maria</h2>
                            </Link>
                            <span>admin</span>
                        </div>
                    </Middle>

                    <Right>
                        <span id="receiptSVG"><PiReceipt size={26} /></span>
                        <label htmlFor="npedidos">
                            <input
                                id="npedidos"
                            />
                        </label>
                        <p>0</p>

                        <div className="rightSideDesktop">
                            <Link to={`/new`}>
                                <Button title="Novo prato" />
                            </Link>
                            <span><GoSignOut size={22} onClick={handleSignOut} cursor="pointer" /></span>
                        </div>
                    </Right>
                </AdminContent>
            }
        </Container>
    )
}
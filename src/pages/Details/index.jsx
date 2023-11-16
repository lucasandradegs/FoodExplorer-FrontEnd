import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Container, Content, UserContent, AdminContent } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../../components/Button";
import { PiReceipt } from 'react-icons/pi'
import { Footer } from "../../components/Footer";
import { Link, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { InputHeader } from "../../components/InputHeader";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { USER_ROLE } from "../../utils/roles";
import { FadeLoader } from "react-spinners";


export function Details({ ingredients }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const params = useParams()
    const { user } = useAuth()

    const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`

    const [quantity, setQuantity] = useState(1)

    function handleAddItem() {
        setQuantity(quantity + 1)
    }

    function handleRemoveItem() {
        setQuantity(quantity - 1)

        if (quantity == 1) {
            setQuantity(1)
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 800)
    }, [])

    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates/${params.id}`)
            setData(response.data)
        }

        setTimeout(() => {
            fetchPlates();
        }, 500)
    }, [])



    return (
        <div className="LoadingDetails" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {
            loading ?
            <FadeLoader color={"#36a6d6"} loading={loading} size={25}/>
            :
            <Container>
                <Header >
                    <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                </ Header>
                {
                    data &&
                    <Content>
                        {[USER_ROLE.CUSTOMER].includes(user.role) &&
                            <UserContent>
                                <Link to="/">
                                    <ButtonText icon={PiCaretLeftBold} title="voltar" />
                                </Link>
                                <div className="TitleSection">
                                    <img src={imageURL} alt="" />
                                    <div className="TileDesktop">
                                        <h2>{data.name}</h2>
                                        <p>{data.description}</p>
                                        <div className="IngredientsSection">
                                            <div className="Ingredients">
                                                {
                                                    data.ingredients.map(title => (
                                                        <span
                                                            key={String(title.id)}
                                                            ingredient={title.ingredient}
                                                        >{title.ingredient}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="Details">
                                            <AiOutlineMinus size={24} onClick={handleRemoveItem} cursor="pointer" />
                                            <h4>{quantity < 10 ? `0${quantity}` : quantity}</h4>
                                            <AiOutlinePlus size={24} onClick={handleAddItem} cursor="pointer" />
                                            <Button className="mobileButton" icon={PiReceipt} title={`pedir ∙ R$ ${data.price * quantity}`} />
                                            <Button className="desktopButton" title={`incluir ∙ R$ ${data.price * quantity}`} />
                                        </div>
                                    </div>
                                </div>
                            </UserContent>
                        }

                        {[USER_ROLE.ADMIN].includes(user.role) &&
                            <AdminContent>
                                <Link to="/">
                                    <ButtonText icon={PiCaretLeftBold} title="voltar" />
                                </Link>
                                <div className="TitleSection">
                                    <img src={imageURL} alt="" />
                                    <div className="TileDesktop">
                                        <h2>{data.name}</h2>
                                        <p>{data.description}</p>
                                        <div className="IngredientsSection">
                                            <div className="Ingredients">
                                                {
                                                    data.ingredients.map(title => (
                                                        <span
                                                            key={String(title.id)}
                                                            ingredient={title.ingredient}
                                                        >{title.ingredient}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="Details">
                                            <Link to={`/edit/${data.id}`}>
                                                <Button className="mobileButton" title="Editar prato" />
                                                <Button className="desktopButton" title="Editar prato" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AdminContent>
                        }
                    </Content>
                }


                <Footer />
            </Container>
            }
        </div>
    )
}
import { Button } from "../Button";
import { Container, UserContent, AdminContent } from "./styles";
import { AiOutlineHeart } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { PiPencilSimpleBold } from "react-icons/pi"
import { useState } from "react";

export function Card({ data, ...rest }) {
    const imageURL = `${api.defaults.baseURL}/files/${data.image}`
    
    const { user } = useAuth()

    const [quantity, setQuantity] = useState(1)

    function handleAddItem() {
        setQuantity (quantity + 1)
    }

    function handleRemoveItem() {
        setQuantity (quantity - 1)

        if (quantity == 1 ) {
            setQuantity(1)
        }
    }

    return (
        <Container {...rest}>
            {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <UserContent>
                    <img src={imageURL} alt={`Imagem do prato ${data.name}`} />
                    <Link to={`/details/${data.id}`}>
                        <h4>{data.name}{' >'}</h4>
                    </Link>
                    <h5>{data.description}</h5>
                    <span>R$ {data.price}</span>
                    <div className="QuantitySection">
                        <div className="MinusAndPlusButton">
                            <AiOutlineMinus size={24} cursor="pointer" onClick={handleRemoveItem}/>
                            <h4>{quantity < 10 ? `0${quantity}` : quantity}</h4>
                            <AiOutlinePlus size={24} cursor="pointer" onClick={handleAddItem}/>
                        </div>
                        <Button title="incluir" />
                    </div>
                </UserContent>
            }

            {[USER_ROLE.ADMIN].includes(user.role) &&
                <AdminContent>
                    <Link to={`/edit/${data.id}`}>
                        <p><PiPencilSimpleBold size={24} /></p>
                    </Link>
                    <div className="Content">
                        <img src={imageURL} alt={`Imagem do prato ${data.name}`}/>
                        <Link to={`/details/${data.id}`}>
                            <h4>{data.name}{' >'}</h4>
                        </Link>
                        <h5>{data.description}</h5>
                        <span>R$ {data.price}</span>
                    </div>
                </AdminContent>

            }
        </Container>
    )
}
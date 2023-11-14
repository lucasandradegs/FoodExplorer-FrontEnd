import { Container, Left } from "./styles";
import { AiOutlineClose } from "react-icons/ai"
import { Link} from "react-router-dom";
import { ButtonText } from "../ButtonText";

export function HeaderMenu() {
    return (
        <Container>
            <Left>
                <Link to="/">
                    <ButtonText icon={AiOutlineClose} title="Menu"/>
                </Link>
            </Left>
        </Container>
    )
}
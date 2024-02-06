import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div className="foodexplorer">
                <img src="/images/explorer.svg" alt="" />
                <h2>food explorer</h2>
            </div>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}
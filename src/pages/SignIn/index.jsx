import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <Container>
            <main className="main">
                <div className="title">
                    <img src="/src/assets/explorer.svg" alt="" />
                    <h2>doce maria</h2>
                </div>
                <Form>
                    <div className="form">
                        <h2>Faça login</h2>
                        <p>Email</p>
                        <Input
                            placeholder="Exemplo: exemplo@exemplo.com.br"
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <p>Senha</p>
                        <Input
                            placeholder="No mínimo 6 caracteres"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <Button title="Entrar" 
                        onClick={handleSignIn}
                        />
                        <Link to="/register">
                            <ButtonText title="Criar uma conta" />
                        </Link>
                    </div>
                </Form>
            </main>
        </Container>
    )
}
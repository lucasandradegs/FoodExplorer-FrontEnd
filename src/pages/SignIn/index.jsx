import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 800)
    }, [])

    return (
        <div className="LoadingSignIn" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {
                loading ?
                <FadeLoader color={"#36a6d6"} loading={loading} size={25}/>
                :
                <Container>
                    <main className="main">
                        <div className="title">
                            <img src="/images/explorer.svg" alt="" />
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
            }
        </div>
    )
}
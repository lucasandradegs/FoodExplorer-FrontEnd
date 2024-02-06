import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { ToastContainer, toast } from 'react-toastify'
import { FadeLoader } from "react-spinners";

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    function handleSignUp(e) {
        e.preventDefault()

        if (!name || !email || !password) {
            return toast.error('Preencha todos os campos!', {
                theme: "colored"
            })
        }

        if (password.length < 6) {
            return toast.error(`A senha deve conter no mínimo 6 caracteres!`, {
                theme: "colored"
            })
        }

        api.post("/users", { name, email, password }).then(() => {
            toast.success(`O usuário ${name} foi cadastrado com sucesso!`, {
                theme: "colored"
            })
            setInterval(() => {
                window.location = './'
            }, 2000)
        }).catch(error => {
            if (error.res) {
                toast.warn(error.res.data.message)
            } else {
                toast.warn('Não foi possível cadastrar o usuário')
            }
        })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 800)
    }, [])

    return (
        <div className="LoadingSignUp" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {
                loading ?
                <FadeLoader color={"#36a6d6"} loading={loading} size={25}/>
                :
                <Container>
                    <main className="main">
                        <div className="title">
                            <img src="/images/explorer.svg" alt="" />
                            <h2>food explorer</h2>
                        </div>
                        <Form>
                            <ToastContainer />
                            <div className="form">
                                <h2>Crie sua conta</h2>

                                <p>Seu nome</p>
                                <Input
                                    placeholder="Exemplo: Maria da Silva"
                                    type="text"
                                    onChange={e => setName(e.target.value)}
                                />
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

                                <Button
                                    title="Criar conta"
                                    onClick={handleSignUp}
                                />
                                <Link to="/">
                                    <ButtonText className="teste" title="Já tenho uma conta" />
                                </Link>
                            </div>
                        </Form>
                    </main>
                </Container>
            }
        </div>
    )
}
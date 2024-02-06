import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, UserContent, AdminContent } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { InputHeader } from "../../components/InputHeader"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useState, useEffect } from "react"

import { USER_ROLE } from "../../utils/roles"
import { FadeLoader } from "react-spinners"


export function Home() {
    const [plates, setPlates] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const { user } = useAuth()


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 1000)
    }, [])

    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates?name=${search}`);
            setPlates(response.data);
        }

        setTimeout(() => {
            fetchPlates();
        }, 500)

    }, [search])

    return (
        <div className="LoadingPage" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {
                loading ?
                <FadeLoader color={"#36a6d6"} loading={loading} size={25}/>
                :
                <Container>
                    <Header >
                        <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)} />
                    </ Header>

                    <main>
                        {[USER_ROLE.CUSTOMER].includes(user.role) &&
                            <UserContent>

                                <section className="BannerImg">
                                    <img className="bannerMobile" src="/images/bannerMobile.svg" alt="" />
                                    <img className="bannerDesktop" src="/images/banner.svg" alt="" />

                                    <div className="mobileTitle">
                                        <h2>Food Explorer</h2>
                                    </div>

                                    <div className="desktopTitle">
                                        <div>
                                            <h2>Sabores inigualáveis</h2>
                                            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                                        </div>
                                    </div>
                                </section>
                                <div className="Transition">
                                    {
                                        plates.filter(plate => plate.category == "Refeições").length > 0 &&
                                        <Section title="Refeições">
                                            {
                                                plates.filter(plate => plate.category == "Refeições").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }

                                    {
                                        plates.filter(plate => plate.category == "Sobremesas").length > 0 &&
                                        <Section title="Sobremesas">
                                            {
                                                plates.filter(plate => plate.category == "Sobremesas").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }

                                    {
                                        plates.filter(plate => plate.category == "Bebidas").length > 0 &&
                                        <Section title="Bebidas">
                                            {
                                                plates.filter(plate => plate.category == "Bebidas").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }
                                </div>

                            </UserContent>
                        }

                        {[USER_ROLE.ADMIN].includes(user.role) &&
                            <AdminContent>

                                <section className="BannerImg">
                                    <img className="bannerMobile" src="/images/bannerMobile.svg" alt="" />
                                    <img className="bannerDesktop" src="/images/banner.svg" alt="" />

                                    <div className="mobileTitle">
                                        <h2>Food Explorer</h2>
                                    </div>

                                    <div className="desktopTitle">
                                        <div>
                                            <h2>Sabores inigualáveis</h2>
                                            <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                                        </div>
                                    </div>
                                </section>
                                <div className="Transition">
                                    {
                                        plates.filter(plate => plate.category == "Refeições").length > 0 &&
                                        <Section title="Refeições">
                                            {
                                                plates.filter(plate => plate.category == "Refeições").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }

                                    {
                                        plates.filter(plate => plate.category == "Sobremesas").length > 0 &&
                                        <Section title="Sobremesas">
                                            {
                                                plates.filter(plate => plate.category == "Sobremesas").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }

                                    {
                                        plates.filter(plate => plate.category == "Bebidas").length > 0 &&
                                        <Section title="Bebidas">
                                            {
                                                plates.filter(plate => plate.category == "Bebidas").map(plate => (
                                                    <Card
                                                        key={String(plate.id)}
                                                        data={plate}
                                                    />
                                                ))
                                            }
                                        </Section>
                                    }
                                </div>
                            </AdminContent>
                        }
                    </main>

                    <Footer />
                </Container>
            }
        </div>

    )
}

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Container, UserContent, AdminContent } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { InputHeader } from "../../components/InputHeader"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import desktopBanner from "../../../public/images/banner.svg"
import mobileBanner from "../../../public/images/bannerMobile.svg"

import { USER_ROLE } from "../../utils/roles"


export function Home() {
    const [plates, setPlates] = useState([])
    const [search, setSearch] = useState("")

    const { user } = useAuth()

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
                                <h2>Doce Maria</h2>
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
                                plates.filter(plate => plate.category == "teste").length > 0 &&
                                <Section title="Refeições">
                                    {
                                        plates.filter(plate => plate.category == "teste").map(plate => (
                                            <Card
                                                key={String(plate.id)}
                                                data={plate}
                                            />
                                        ))
                                    }
                                </Section>
                            }

                            {
                                plates.filter(plate => plate.category == "Refeições").length > 0 &&
                                <Section title="Pratos Principais">
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
                                plates.filter(plate => plate.category == "teste").length > 0 &&
                                <Section title="Pratos Principais">
                                    {
                                        plates.filter(plate => plate.category == "teste").map(plate => (
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
                                <h2>Doce Maria</h2>
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
                                plates.filter(plate => plate.category == "teste").length > 0 &&
                                <Section title="Refeições">
                                    {
                                        plates.filter(plate => plate.category == "teste").map(plate => (
                                            <Card
                                                key={String(plate.id)}
                                                data={plate}
                                            />
                                        ))
                                    }
                                </Section>
                            }

                            {
                                plates.filter(plate => plate.category == "Refeições").length > 0 &&
                                <Section title="Pratos Principais">
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
                                plates.filter(plate => plate.category == "teste").length > 0 &&
                                <Section title="Pratos Principais">
                                    {
                                        plates.filter(plate => plate.category == "teste").map(plate => (
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

    )
}

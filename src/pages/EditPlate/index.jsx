import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { InputHeader } from "../../components/InputHeader";
import { FiSearch, FiUpload } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PiCaretLeftBold } from "react-icons/pi";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { AiOutlineUpload } from "react-icons/ai"
import { Input } from "../../components/Input";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify'
import { IngredientPlate } from "../../components/IngredientPlate";
import { ConfirmToast } from 'react-confirm-toast'
import { FadeLoader } from "react-spinners";


export function EditPlate() {
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [loading, setLoading] = useState(false)

    const params = useParams();
    const navigate = useNavigate();
    const inputRef = useRef()

    async function handleEditPlate() {

        // if (!imageFile) {
        //     return toast.error('Você precisa enviar a imagem do prato!', {
        //         theme: "colored"
        //     })
        // }

        if (!name) {
            return toast.error('Você precisa informar o nome do prato!', {
                theme: "colored"
            })
        }

        if (!category) {
            return toast.error('Você precisa informar a categoria do prato!', {
                theme: "colored"
            })
        }

        if (ingredients.length < 2) {
            return toast.error('Você precisa adicionar ao menos dois (2) ingredientes!', {
                theme: "colored"
            })
        }

        if (!price) {
            return toast.error('Você precisa informar o preço do prato!', {
                theme: "colored"
            })
        }

        if (!description) {
            return toast.error('Você precisa informar a descrição do prato!', {
                theme: "colored"
            })
        }

        try {
            let formattedPrice = price.toString().replace(".", ",");

            const priceRegex = /^\d{1,3},\d{2}$/;
            if (!priceRegex.test(formattedPrice)) {
                return toast.error("Digite o preço num formato válido. Ex: 12,99", { containerId: "autoClose", theme: "colored" });
            };

            formattedPrice = parseFloat(formattedPrice.replace(",", "."));

            const formData = new FormData();

            if (imageFile) {
                formData.append("image", imageFile)
            }

            api.put(`/plates/${params.id}`, { name, category, ingredients, price, description })
            api.patch(`/plates/${params.id}`, formData)

            toast.success('Prato modificado com sucesso!', {
                theme: "colored"
            })

            setTimeout(() => {
                navigate("/")
            }, 2500)
        } catch (error) {
            console.error(error)
            return toast.error(`Não foi possivel editar o prato`)
        }
    }

    async function handleRemovePlate() {
        try {
            await api.delete(`/plates/${params.id}`)

            toast.success(`Prato removido com sucesso!`, {
                theme: "colored"
            })

            setTimeout(() => {
                navigate("/");
            }, 2500);

        } catch (error) {
            console.error(error)
            return toast.error(`Não foi possivel remover o prato`)
        }
    }

    function handleAddIngredient() {

        if (newIngredient === "") {
            return toast.error('Não é possível adicionar um ingrediente vazio!', {
                theme: "colored"
            })
        }

        setIngredients(prevState => [...prevState, newIngredient])

        setNewIngredient("")
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    const handleCostumInputClick = () => {
        inputRef.current.click()
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        }, 800)
    }, [])

    useEffect(() => {
        async function fetchPlate() {
            const response = await api.get(`/plates/${params.id}`)

            const { name, category, ingredients, price, description, imageFile } = response.data
            setName(name)
            setCategory(category)
            setIngredients(ingredients.map(ingredient => ingredient.ingredient))
            setPrice(price)
            setDescription(description)
            setImageFile(imageFile)
        }

        fetchPlate()
    }, [])

    
    return (
        <div className="LoadingEdit" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            {
                loading ?
                <FadeLoader color={"#36a6d6"} loading={loading} size={25}/>
                :
                <Container>
                    <Header >
                        <InputHeader icon={FiSearch} placeholder="Busque por pratos ou ingredientes" onChange={(e) => setSearch(e.target.value)} />
                    </ Header>
                    <Content>
                        <Link to="/">
                            <ButtonText icon={PiCaretLeftBold} title="voltar" />
                        </Link>
                        <ToastContainer />
                        <div className="newPlateSection">
                            <h2>Editar prato</h2>

                            <label htmlFor="imageInput">Imagem do prato</label>
                            <Input icon={FiUpload} placeholder="Selecione a Imagem" onClick={handleCostumInputClick} readOnly />
                            <input
                                type="file"
                                id="imageInput"
                                accept=".png"
                                style={{ display: 'none' }}
                                onChange={e => setImageFile(e.target.files[0])}
                                ref={inputRef}
                            />

                            <h4>Nome</h4>
                            <Input
                                placeholder="Ex: Bolo de Cenoura"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <h4>Categoria</h4>
                            <select value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="">Selecione uma opção</option>
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>

                            <h4>Ingredientes</h4>
                            <div className="Ingredients">

                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientPlate
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }

                                <IngredientPlate
                                    isNew
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                />
                            </div>

                            <h4>Preço</h4>
                            <Input
                                placeholder="R$ 00,00"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />

                            <h4>Descrição</h4>
                            <textarea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <div className="DeviceButtons">
                                <Button title="Excluir prato" onClick={handleRemovePlate} />
                                <Button colored title="Salvar alterações" onClick={handleEditPlate} />
                            </div>
                        </div>

                        <h2>Editar prato</h2>
                        <div className="DesktopForm">
                            <div className="plateImage">
                                <h4>Imagem do prato</h4>
                                <Input icon={FiUpload} placeholder="Selecione a Imagem" onClick={handleCostumInputClick} readOnly />
                                <input
                                    type="file"
                                    id="imageInput"
                                    accept=".png"
                                    style={{ display: 'none' }}
                                    onChange={e => setImageFile(e.target.files[0])}
                                    ref={inputRef}
                                />
                            </div>
                            <div className="plateName">
                                <h4>Nome</h4>
                                <Input
                                    id="Name"
                                    placeholder="Ex: Bolo de Cenoura"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="plateCategory">
                                <h4>Categoria</h4>
                                <select value={category} id="category" onChange={e => setCategory(e.target.value)}>
                                    <option value="">Selecione uma opção</option>
                                    <option value="Refeições">Refeições</option>
                                    <option value="Sobremesas">Sobremesas</option>
                                    <option value="Bebidas">Bebidas</option>
                                </select>
                            </div>

                        </div>
                        <div className="DesktopForm">

                            <div className="plateIngredients">
                                <h4>Ingredientes</h4>
                                <div className="Ingredients">

                                    {
                                        ingredients.map((ingredient, index) => (
                                            <IngredientPlate
                                                key={String(index)}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        ))
                                    }

                                    <IngredientPlate
                                        isNew
                                        placeholder="Adicionar"
                                        onChange={e => setNewIngredient(e.target.value)}
                                        value={newIngredient}
                                        onClick={handleAddIngredient}
                                    />
                                </div>
                            </div>
                            <div className="platePrice">
                                <h4>Preço</h4>
                                <Input
                                    placeholder="R$ 00,00"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="DesktopForm">
                            <div className="plateDesc">
                                <h4>Descrição</h4>
                                <textarea
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="saveButton">
                            <Button title="Excluir prato" onClick={handleRemovePlate} />
                            <Button colored title="Salvar alterações" onClick={handleEditPlate} />
                        </div>
                    </Content>

                    <Footer />
                </Container>
            }
        </div>
    )
}
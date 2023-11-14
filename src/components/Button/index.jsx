import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, colored = false, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            $colored={colored}
            {...rest}
        >
            {Icon && <Icon size={32} />}
            {loading ? 'Carregando...' : title}
        </Container>
    )
}
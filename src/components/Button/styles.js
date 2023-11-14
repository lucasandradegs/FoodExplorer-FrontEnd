import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 4.8rem;

    border: 0;
    padding: 0 1.6rem;
    border-radius: 0.5rem;

    font-weight: 100;
    
    background-color: ${({theme, $colored}) => $colored ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &:disabled {
        opacity: 0.5;
    }

    svg {
        margin-right: 0.8rem;
    }
`
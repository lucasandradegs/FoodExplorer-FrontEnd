import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border: none;
    font-weight: 100;
`
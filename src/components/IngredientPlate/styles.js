import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    height: 3.2rem;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.LIGHT_600};
    color: ${({theme}) => theme.COLORS.LIGHT_600};

    border: ${({theme, $isnew}) => $isnew ? `2px dashed ${theme.COLORS.LIGHT_600}` : "none"};

    /* margin-bottom: 8px; */
    border-radius: 10px;
    margin-top: .8rem;

    > button {
        margin-bottom: 1.7rem;
        margin-left: -1.8rem;
        margin-right: 1rem;
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > input {
        height: 3.2rem;
        width: 100%;
        max-width: 11.8rem;
        
        padding: 1rem 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};

        border: 0;
        border-radius: .8rem;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_600};
        }     
    }

`;
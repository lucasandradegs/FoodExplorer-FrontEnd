import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    
    width: 21.0rem;
    height: 29.2rem;
    
    margin-top: 2.4rem;
    padding: 2.4rem;
    
    
    border-radius: 8px;
    margin-bottom: 2.4rem;
    

    /* background-color: ${({theme}) => theme.COLORS.DARK_200}; */
    background-color: ${({theme}) => theme.COLORS.LIGHT_300};

    a {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
    }


    h4 {
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.DARK_600};
    }

    span {
        /* color: ${({theme}) => theme.COLORS.CAKE_200}; */
        color: ${({theme}) => theme.COLORS.TOMATO_100};
    }
    
    img {
        width: 8.8rem;
        height: 8.8rem;
    }


    .MinusAndPlusButton {
        display: flex;
        justify-content: center;
        
        gap: 1.4rem;
        
        width: 16.2rem;
        color: ${({theme}) => theme.COLORS.DARK_600};
    }

    .QuantitySection {
        button {
            margin-top: 1.6rem;
            height: 3.2rem;
        }
    }

    @media (max-width: 1023px) {
        h5 {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        width: 30.4rem;
        height: 46.2rem;

        img {
            width: 17.6rem;
            height: 17.6rem;
        }

        h4 {
            font-size: 2.4rem;
        }

        h5 {
            text-align: center;
            font-family: 'Roboto', serif;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.DARK_900};
        }

        span {
            font-size: 3.2rem;
        }

        .MinusAndPlusButton {
            align-items: center;
            margin-top: 1.2rem;
        }

        .QuantitySection {
            width: 20.8rem;

            h4 {
                font-size: 2rem;
            }

            display: flex;
            align-items: center;
            justify-content: center;

            button {
                width: 9.2rem;
                height: 4.6rem;
            }
        }
    }
`;  

export const UserContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    h4 {
        font-size: 2rem;
    }

    @media (max-width: 1023px) {
        h4 {
            font-size: 1.4rem;
        }
    }
`;

export const AdminContent = styled.div`
    width: 21.0rem;
    height: 100%;

    p {
        display: flex;
        flex-direction: row-reverse;
        margin-right: 1.6rem;
        color: ${({theme}) => theme.COLORS.DARK_900};
    }

    .Content {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 2.5rem;

        h4 {
            margin-top: 1.2rem;
            margin-bottom: 1.2rem;
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.DARK_900};
        }
        

        @media (min-width: 1024px) {
            margin-top: 2rem;

            h4 {
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
                font-size: 2.4rem;
            }

            span {
                margin-top: 1.5rem;
            }
        }
    }

    @media (min-width: 1024px) {
            width: 30.4rem;
            height: 46.2rem;
        }

`;
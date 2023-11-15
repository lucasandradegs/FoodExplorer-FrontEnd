import styled from 'styled-components'

export const Container = styled.div`
    /* display: grid; */
    width: 100%;
    min-height: 100vh;
    position: relative;
    grid-template-rows: 10.5rem auto 14.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    overflow-x: hidden;

`   

export const Content = styled.main`
        padding: 0 5.3rem 12rem;

        @media (min-width:1024px) {
            padding: 4rem 12rem 16rem;
        }

        button:nth-child(1) {
            display: flex;
            justify-content: flex-start;

            font-size: 2.4rem;

            margin-top: 3.6rem;

            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }


    .TitleSection {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        text-align: center;

        margin-top: 1.6rem;

        img {
            width: 26.4rem;
            height: 26.4rem;
        }

        h2 {
            margin-top: 1.6rem;
        }

        p {
            margin-top: 2.4rem;
        }

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            gap: 4.2rem;

            img {
                margin-top: 4.2rem;
                width: 39.1rem;
                height: 38.9rem;
            }

            h2 {
                font-size: 4rem;
            }

            p {
                font-size: 2.4rem;
            }
        }

        
    }

    .IngredientsSection {
        margin-top: 2.4rem;

        span {
            padding: 0.4rem 0.8rem;
            border-radius: 5px;
            background-color: ${({theme}) => theme.COLORS.DARK_1000};
            font-size: 1.4rem;
        }

    }

    .Ingredients {
        display: flex;
        gap: 2.4rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .Details {
        display: flex;
        align-items: center;
        margin-top: 4.8rem;
        justify-content: center;
        
        gap: 1.6rem;
        
        font-size: 2.2rem;

        button {
            width: 18.8rem;
            height: 3.7rem;

            font-size: 0.9rem;

            svg {
                width: 2.1rem;
                height: 2.1rem;
            }

        }

        @media (max-width: 1023px) {
            .desktopButton  {
                display: none;
            }
        }

        @media (min-width: 1024px) {
            
            button {
                margin-left: 1.7rem;
                width: 16.2rem;
                height: 4.8rem;

                font-size: 1.4rem;
            }

            .mobileButton {
                display: none;
            }
        }
    }

    @media (min-width: 1024px) {
        .TileDesktop {
            display: flex;
            flex-direction: column;
            text-align: left;

            .Ingredients {
                justify-content: start;
            }

            .Details {
                justify-content: start;
            }
        }

        
    }
`;

export const UserContent = styled.div`
        animation: DetailsUser 2.0s;

        @keyframes DetailsUser {
            from {
                transform: translateX(100%);
            }
        }

    .Details {
        button {
            font-size: 1.2rem;
        }
    }
`;


export const AdminContent = styled.div`
        animation: Details 1.4s;

        @keyframes Details {
            from {
                transform: translateX(100%);
            }
        }

    .Details {
        margin-top: 1rem;

        button {
            width: 30.6rem;
            justify-content: center;
            font-size: 1.4rem;
        }
    }

    @media (min-width: 1024px) {

        .Details {
            margin-top: 4.8rem;

            button {
                margin-left: 0;
                width: 13.1rem;
            }
        }
    }

`;
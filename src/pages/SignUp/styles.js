import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 15.8rem 6.5rem;

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 1.1rem;
        margin-bottom: 4.1rem;

        animation: main 2.0s;

        @keyframes main {
            from {
                transform: translateY(-100%);
            }
        }

        h2 {
            font-size: 3.4rem;

            @media (max-width: 407px) {
                font-size: 2rem;
            }
        }

        img {
            width: 4.3rem;
            height: 4.3rem;
        }
    }

    @media (min-width: 1024px) {
        .main {
            display: flex;
            gap: 22.6rem;

            .title {
                width: 240px;
                h2 {
                    font-size: 2.8rem;
                }
            }
        }
    }

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;


    animation: form 1.5s;

        @keyframes form {
            from {
                transform: translateX(-50%);
            }
        }
    
    
    input {
        width: 31.6rem;
    }

    P {
        margin-top: 3.2rem;
        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    button {
        margin-top: 3.2rem;
    }

    h2 {
        display: none;
    }
    

    @media (min-width: 1024px) {
        
        h2 {
            display: flex;
            justify-content: center;
        }

        .form {
            background-color: ${({ theme }) => theme.COLORS.DARK_700};
            width: 47.6rem;
            border-radius: 1.6rem;
            padding: 6.4rem;
        }
    }
`;
import styled from 'styled-components'

export const Container = styled.div`
    grid-area: footer;

    width: 100%;
    height: 7.7rem;
    position: absolute;
    bottom: 0;


    padding: 0 2.8rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: space-between;


    span {
        font-size: 1rem;
        color: ${({theme}) => theme.COLORS.DARK_900};
    }

    .foodexplorer {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-weight: 700;
        font-size: 1rem;

        font-family: 'Roboto', serif;
        
        color: ${({theme}) => theme.COLORS.DARK_600};
        
        img {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.LIGHT_700};
        }
    }


    background-color: ${({theme}) => theme.COLORS.LIGHT_300};

    @media (min-width: 1024px) {
        padding: 0 12.4rem;

        h2 {
            font-weight: 700;
            font-size: 2.4rem;
            color: ${({theme}) => theme.COLORS.DARK_600};
        }

        span {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.DARK_900};
        }

        .foodexplorer {
            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }
`;
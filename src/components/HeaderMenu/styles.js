import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;

    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    height: 10.4rem;
    width: 100%;


    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    
    `;

export const Left = styled.div`
    margin-top: 0.8rem;
    display: flex;

    button:nth-child(1) {

            font-size: 2rem;
            gap: 1.6rem;

            svg {
                width: 2rem;
                height: 2rem;
            }
        }

`;

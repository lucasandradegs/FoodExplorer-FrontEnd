import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 500;
    }

    @media (min-width: 1024px) {
        margin-bottom: 3rem;

        h2 {
            font-size: 3.2rem;
        }
    }

`;



export const Slider = styled.div`
    max-width: 100%;
    height: 100%;

    position: relative;
    display: flex;
    justify-content: space-between;

    > div {
        display: flex;
        gap: 2.7rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    
    @media (max-width: 1023px) {
        > button {
            display: none;
        }
    }

    @media (min-width: 1024px) {
    > button {
        border: 0;
        position: relative;

        background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 10%, #000A0F 100%);
        svg {
            color: white;
        }
    }

    @media (max-width: 768px){
    width: 100%;
    /* max-width: 66.8rem; */

    > div {
    display: flex;
    gap: 1rem;
    }
  }
    }
`;
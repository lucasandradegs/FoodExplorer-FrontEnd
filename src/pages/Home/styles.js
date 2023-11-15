import styled from "styled-components"

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_400};

    width: 100%;
    min-height: 100vh;
    position: relative;

    display: grid;
    grid-template-rows: 10.5rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        overflow-y: hidden;
        ::-webkit-scrollbar {
        display: none;
        }
    }

`

export const UserContent = styled.main`

    padding: 0 2.4rem;
    margin-top: 4.4rem;

    .Transition {
        overflow-y: hidden;
        animation: Home 2.0s;

        @keyframes Home {
            from {
                transform: translateY(100%);
            }
        }
    }

    @media (max-width: 1023px) {
        .bannerDesktop {
            display: none;
        }
    }

    .BannerImg {
        display: flex;
        flex-direction: column;
        margin-bottom: 6.2rem;
        height: 12rem;

        border-radius: 0.8rem;


        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        img {
            position: absolute;
            width: 19.1rem;
            height: 14.9rem;
            top: 12.03rem;
            left: 0.1rem;
        }

        .mobileTitle {
            display: flex;
            justify-content: end;
            margin-right: 30px;
            margin-top: 40px;

            h2 {
                font-weight: 500;
            }

            @media (max-width: 424px) {
                display: none;
            }

            @media (min-width: 768px) {
                display: none;
            }
        }

        .desktopTitle {
            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-right: 30px;
                margin-top: 22px;

                h2 {
                    font-size: 3rem;
                    font-weight: 500;
                }

                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    
    
        @media (min-width: 1024px) {
            height: 26rem;
        }
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        padding: 0 11.2rem;


        .BannerImg {

            margin-top: 16.4rem;
            
            img {
                position: absolute;
                width: 65.6rem;
                height: 41.2rem;
                top: 11.7rem;
                left: 34rem;
            }

            .desktopTitle {
                display: none;
            }

        }
        

        .bannerMobile {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        padding: 0 11.2rem;


        .BannerImg {

            .desktopTitle {
                div {

                    margin-right: 10rem;
                    margin-top: 8rem;

                    h2 {
                        letter-spacing: 3px;
                        font-size: 4rem;
                    }
                    
                    span {
                        font-size: 1.6rem;
                    }
                }
            }
            
            margin-top: 16.4rem;
            
            img {
                position: absolute;
                width: 65.6rem;
                height: 41.2rem;
                top: 11.7rem;
                left: 4.2rem;
            }

        }


        .bannerMobile {
            display: none;
        }
    }
`;

export const AdminContent = styled.main`
    padding: 0 2.4rem;
    margin-top: 4.4rem;

    .Transition {
        overflow-y: hidden;
        animation: main 2.0s;

        @keyframes main {
            from {
                transform: translateY(100%);
            }
        }
    }


    @media (max-width: 1023px) {
        .bannerDesktop {
            display: none;
        }
    }

    .BannerImg {
        display: flex;
        flex-direction: column;
        margin-bottom: 6.2rem;
        height: 12rem;

        border-radius: 0.8rem;


        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

        img {
            position: absolute;
            width: 19.1rem;
            height: 14.9rem;
            top: 12.03rem;
            left: 0.1rem;
        }

        .mobileTitle {
            display: flex;
            justify-content: end;
            margin-right: 30px;
            margin-top: 40px;

            h2 {
                font-weight: 500;
            }

            @media (max-width: 424px) {
                display: none;
            }

            @media (min-width: 768px) {
                display: none;
            }
        }

        .desktopTitle {
            div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-right: 30px;
                margin-top: 22px;

                h2 {
                    font-size: 3rem;
                    font-weight: 500;
                }

                @media (max-width: 767px) {
                    display: none;
                }
            }
        }
    
    
        @media (min-width: 1024px) {
            height: 26rem;
        }
    }

    @media (min-width: 1024px) and (max-width: 1439px) {
        padding: 0 11.2rem;


        .BannerImg {

            margin-top: 16.4rem;
            
            img {
                position: absolute;
                width: 65.6rem;
                height: 41.2rem;
                top: 11.7rem;
                left: 34rem;
            }

            .desktopTitle {
                display: none;
            }

        }
        

        .bannerMobile {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        padding: 0 11.2rem;


        .BannerImg {

            .desktopTitle {
                div {

                    margin-right: 10rem;
                    margin-top: 8rem;

                    h2 {
                        letter-spacing: 3px;
                        font-size: 4rem;
                    }
                    
                    span {
                        font-size: 1.6rem;
                    }
                }
            }
            
            margin-top: 16.4rem;
            
            img {
                position: absolute;
                width: 65.6rem;
                height: 41.2rem;
                top: 11.7rem;
                left: 4.2rem;
            }

        }


        .bannerMobile {
            display: none;
        }
    }
`;
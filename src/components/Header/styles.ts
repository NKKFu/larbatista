import styled from 'styled-components';

interface HamburguerProps {
    isOpen: boolean;
}

export const Hamburguer = styled.div<HamburguerProps>`
    @media screen and (max-width: 1000px) {
        & ~ .button-group{
            display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
            a {
                display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
            }
            transform: ${({ isOpen }) => isOpen ? 'translateX(calc(-0%))' : 'translateX(100%)'};
        }
    }
            /* display: none; */
            /* transform: translateX(50vw); */
`;

export const Container = styled.div`
    position: sticky;
    z-index: 1;
    display: flex;
    top: 0;
    height: 100px;
    width: 100%;
    background-color: rgba(240,240,0,1);
    padding: 20px;
    box-shadow: 0px 0px 20px 0px rgba(1,1,1,0.2);

    img {
        width: 64px;
        height: 64px;
    }

    ${Hamburguer} {
        max-height: 64px;
        display: none;
    }

    .button-group {
        display: flex;
        flex-direction: row;
        padding: 0px;
        margin-left: auto;
        width: auto;
        a {
            display: flex;
            text-decoration: none;
            color: #333600;
            font-weight: bold;
            padding: 5px 20px;
            background-color: #e3e300;
            border-radius: 5px;
            vertical-align: center;
            margin: 0 10px;

            transition: background-color 0.5s, transform 0.2s;

            &:hover {
                transform: scale(1.1);
                background-color: #b5b500;
            }
            
            p {
                margin: auto 0;
            }
        }
    }
    

    @media screen and (max-width: 1000px) {
        color: #FFF;

        ${Hamburguer} {
            display: flex;
            margin-left: auto;

            svg {     
                width: 64px;
                margin-left: auto;
            }
        }

        .button-group {
            position: fixed;
            left: 0;
            top: 0;
            flex-direction: column;
            transition: transform 0.3s;
            width: 100vw;
            height: 100vh;

            a {
                display: flex;
                padding: 20px 20px;
                border-radius: 0;
                margin: 0;
                margin-left: 40vw;
            }
        }
    }
`;
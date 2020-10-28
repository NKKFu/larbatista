import styled from 'styled-components';

interface Props {
    titleColor: string;
    descriptionColor: string;
    backgroundColor: string;
}

export const AboutCardContainer = styled.div<Props>`


        border-radius: 5px;
        padding: 10px;
        margin: 20px 10px;
        background-color: ${props => props.backgroundColor};

        h2 {
            color: ${props => props.titleColor};
            margin-bottom: 10px;
        }

        p {
            color: ${props => props.descriptionColor};
            font-size: 14px;
        }
`;

export const Container = styled.div`

    > img {
        display: block;
        width: 100%;
        height: auto;
    }

    .phrase {
        display: flex;
        flex: 1;
        text-align: center;
        text-justify: distribute;
        padding: 30px;
        font-size: 24px;
        background-color: rgba(0,255,255,0.2);
        p {
            margin: auto;
        }
    }
    
    .cards-list {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
    }

    .sponsors-list {
        max-width: 1000px;
        margin: 0 auto;
        background-color: rgba(255, 244, 176,0.2);
        padding: 50px;
        h1 {
            margin-bottom: 50px;
            text-align: center;
        }
        div {
            display: grid;
            grid-template-columns: 1fr 1fr;
            img { 
            }
        }
    }

    .sponsor-button {
        display: flex;
        cursor: pointer;
        margin: 50px auto;
        width: 250px;
        padding: 20px;
        background-color: rgba(170, 232, 104,0.6);
        transition: background-color 0.2s, transform 0.2s;
        border-radius: 5px;
        p {
            margin: auto;
        }

        &:hover {
            transform: scale(1.1);
            background-color: rgba(153, 204, 98,1);
        }
    }
`;
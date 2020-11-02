import styled from 'styled-components';

interface Props {
    titleColor: string;
    descriptionColor: string;
    backgroundColor: string;
}

export const AboutCardContainer = styled.div<Props>`
    padding: 50px 20px;
    background-color: ${props => props.backgroundColor};

    a {
        text-decoration: none;
    }
    h2 {
        color: ${props => props.titleColor};
        margin-bottom: 10px;
    }

    p {
        color: ${props => props.descriptionColor};
        font-size: 16px;
    }

    transition: all 0.5s;

    &:hover {
        z-index: 1;
        transform: scale(1.1);
    }
`;

export const Container = styled.div`
    min-height: calc(100vh - 195px);
    box-shadow: 0px 0px 5px 0px rgba(1,1,1,0.2);
    max-width: 1300px;
    flex: 1;
    margin: 0 auto 0 auto;
    background-color: #f2f2f2;

    > img {
        display: block;
        width: 100%;
        height: auto;
    }

    .phrase {
        color: rgba(0,100,100,1);
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .sponsors-list {
        background-color: #F3F0CF;
        padding: 50px;
        h1 {
            color: #6b684a;
            margin-bottom: 50px;
            text-align: center;
        }
        div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: calc(1vw + 2vh);
            grid-auto-rows: min-content;
            .img-container {
                            
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                border-radius: 5px;

                img {
                    flex-shrink: 0;
                    min-width: 100%;
                    min-height: 100%;
                }
            }
        }
    }

    .sponsor-button {
        display: flex;
        cursor: pointer;
        margin: 50px auto;
        width: 300px;
        padding: 50px;
        background-color: rgba(170, 232, 104,0.6);
        font-weight: bold;
        transition: background-color 0.2s, transform 0.2s;
        border-radius: 5px;
        a {
            color: rgba(70, 132, 4,0.6);
            text-decoration: none;
            margin: auto;
        }

        &:hover {
            transform: scale(1.1);
            background-color: rgba(153, 204, 98,1);
        }
    }
`;
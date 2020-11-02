import styled from 'styled-components';

export const Container = styled.div`
    min-height: calc(100vh - 195px);
    box-shadow: 0px 0px 5px 0px rgba(1,1,1,0.2);
    max-width: 1300px;
    flex: 1;
    margin: 0 auto 0 auto;
    background-color: #f2f2f2;

    .main-container {
        padding: 0 20px;

        h1 {
            color: black;
            margin: 40px 0;
            text-align: center;
        }

        .mapouter {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            
            ul {
                list-style: none;
                text-align: justify;
                margin-bottom: 15px;
            }

            p {
                text-align: justify;
                line-height: 1.2rem;
                margin-bottom: 15px;
            }

            h2, h3  {
                text-align: center;
            }

            .gmap_canvas {
                iframe {
                    width: 100%;
                    height: 500px;
                }
            }

            @media screen and (max-width: 1000px) {
                grid-template-columns: 1fr;
                flex-direction: column;

                .gmap_canvas { 
                    margin-right: 0;
                    
                    iframe {
                        height: auto;
                    }
                }
            }
        }   

        > a {
            display: flex;
            border-radius: 5px;
            text-decoration: none;
            text-align: center;
            background-color: #00b80c;
            font-weight: bold;
            color: #FFF;
            width: 100%;
            margin: 20px auto;
            padding: 30px 20px;
            transition: background-color 0.3s;

            &:hover {
                background-color: #008709;
                cursor: pointer;
            }

            p {
                display: inline;
                margin-left: auto;
                margin-right: 10px;
                /* text-align: center; */
            }

            svg { 
                margin-right: auto;
            }
        }
    }
`;
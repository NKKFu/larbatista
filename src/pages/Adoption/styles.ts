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

        img { 
            width: 80vw;
            max-width: 500px;
            display: flex;
            margin: 50px auto;
        }
    }
`;
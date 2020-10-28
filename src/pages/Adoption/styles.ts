import styled from 'styled-components';

export const Container = styled.div`

    .main-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
        color: gray;

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
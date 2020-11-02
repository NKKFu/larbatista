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

        p {
            text-indent: 30px;
            text-align: center;
            line-height: 1.2rem;
            margin-bottom: 15px;
        }

        h2, h3  {
            text-align: center;
        }
        
        iframe {
            margin-top: 100px;
            display: flex;
            overflow-y: visible;
            width: 100%;
            height: 1300px;
        }
    }

`;
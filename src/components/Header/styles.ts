import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: rgba(255,255,0,0.5);
    padding: 20px;
    box-shadow: 0px 0px 20px 0px rgba(1,1,1,0.2);

    img {
        width: 64px;
        height: 64px;
    }

    .button-group {
        display: flex;
        flex-direction: row;
        padding: 0px;
        margin-left: auto;
        width: auto;
        a {
            text-decoration: none;
            color: #333600;
            font-weight: bold;
            padding: 20px;
        }
    }
`;
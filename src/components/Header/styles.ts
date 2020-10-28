import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    background-color: rgba(240,240,0,1);
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
`;
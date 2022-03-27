import { Button } from '@globus/design-system';
import styled, { createGlobalStyle } from 'styled-components';

const StyledButton = styled(Button)`
    margin: auto;
`;

const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default function App() {
    const handleButtonClick = () => {
        console.log('Clicked');
    }

    return (
        <>
        <GlobalStyle />
        <StyledButton onClick={handleButtonClick}>
            Click me
        </StyledButton>
        </>
    );
}
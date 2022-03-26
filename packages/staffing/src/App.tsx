import { Button } from '@globus/design-system';

export default function App() {
    const handleButtonClick = () => {
        console.log('Clicked');
    }

    return <Button onClick={handleButtonClick}>
        Click me
    </Button>
}
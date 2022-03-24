import { printMessage } from '@globus/design-system';

const button = document.createElement('button');

button.onclick = () => printMessage('Alex');
button.innerText = 'Click me';

document.body.appendChild(button);
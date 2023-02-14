// eslint-disable-next-line @typescript-eslint/no-var-requires
require('source-map-support').install();
import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

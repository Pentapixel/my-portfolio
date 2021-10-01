import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/themeHook/themeContext';

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));


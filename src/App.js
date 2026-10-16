import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import ToastProvider from './contexts/ToastContext';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Cairo"],
    },
    palette: {
      primary: {
        main: "#ab003c"
      }
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div className="App" style={{height: "100vh", display: "flex", alignItems: "center", direction: "rtl"}}>
          <MainContainer/>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;

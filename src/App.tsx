import { RalipoProvider } from '.';
import './App.css';
import RalipoLogo from '/logo.svg';

function App() {
  return (
    <RalipoProvider
      showLauncher={true}
      showWidget={false}
      apiKey="d685a15e-cee3-4a26-b18e-af608d2258d9|6oabNTzDGGYO3bB3"
    >
      <div>
        <a href="#" target="_blank">
          <img src={RalipoLogo} className="logo" alt="Ralipo logo" />
        </a>
      </div>
      <h1>Ralipo React</h1>
    </RalipoProvider>
  );
}

export default App;

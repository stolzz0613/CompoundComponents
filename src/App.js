import { ListProvider } from "./Context";
import { Main } from './Components';

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Main />
      </ListProvider>
    </div>
  );
}

export default App;

import ContextsProvider from "./providers/context";
import RoutesMain from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
    </div>
  );
}

export default App;

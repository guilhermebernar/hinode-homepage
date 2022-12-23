import ContextsProvider from "./providers/context";
import RoutesMain from "./routes/routes";

function App() {
  return (
    <div className="App">
      <ContextsProvider>
        <RoutesMain/>
      </ContextsProvider>
    </div>
  );
}

export default App;

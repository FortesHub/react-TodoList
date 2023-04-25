import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import AppRouter from "./router/App-Router";

function App() {
  const queryClient = new QueryClient();
  return (
   <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppRouter />
      </div>
      </QueryClientProvider>
  );
}

export default App;

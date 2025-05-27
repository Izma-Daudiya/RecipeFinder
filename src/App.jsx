// App.js
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from './context/AuthContext';
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RecipeProvider>
          <AppRoutes />
        </RecipeProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
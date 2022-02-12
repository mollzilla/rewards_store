import AppProvider from './ContextProvider';
import './css/style.css';
import UserHeader from './components/UserHeader';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  // TODO refactorizacion para que app provea productos y filtros de header a a cardcontainer

  return (
    <Provider store={store}>
      <AppProvider>
        <div className="App">
          <UserHeader />
          <Header />
          <SearchBar />
          <CardContainer />
          <Footer />
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;

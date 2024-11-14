import './App.css';
import HousekeepingBook from './HousekeepingBook';

import { Provider } from 'react-redux';
import store from './amounts';

function App() {
  return (
    <div>
      <h2>가계부</h2>
      <Provider store={store}>
        <HousekeepingBook></HousekeepingBook>
      </Provider>
    </div>
  );
}

export default App;

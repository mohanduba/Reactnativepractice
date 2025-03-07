import { Provider } from 'react-redux';
import { store } from './store';
import UserComponent from './UserComponent';

export default function App() {
    return (
        <Provider store={store}>
            <UserComponent />
        </Provider>
    );
}

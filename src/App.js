import UserProfile from './components/Profile/UserProfile';
import UsersList from './components/UsersList/UsersList';

import './css/App.css';

const App = () => {
    return (
        <div className='app-container'>
            <UsersList />
            <UserProfile />
        </div>
    );
};

export default App;

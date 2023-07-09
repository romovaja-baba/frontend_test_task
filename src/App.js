import { useState } from 'react';
import './css/App.css';
import UserProfile from './components/Profile/UserProfile';
import UsersList from './components/UsersList/UsersList';
import { useDispatch } from 'react-redux'
import { changeUser } from './redux/store'

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const dispatch = useDispatch()

    const onUserClick = (user) => {
        setSelectedUser(user);
    }

    const submitUser = (user) => {
        dispatch(changeUser(user))
    }

    return (
        <div className='app-container'>
            <UsersList
                onUserClick={onUserClick}
            />
            <UserProfile user={selectedUser} submitUser={submitUser} />
        </div>
    );
}

export default App;

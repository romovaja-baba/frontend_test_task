import { useState } from 'react';
import './css/App.css';
import UserProfile from './components/Profile/UserProfile';
import UsersList from './components/UsersList/UsersList';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([
        {
            id: '69d4993e-543a-43f0-893a-357d567ce716',
            age: 30,
            firstName: 'Hendricks',
            lastName: 'Dale',
            email: 'hendricksdale@proflex.com',
        },
        {
            id: '35a0f6a7-d328-4506-98fa-bc48b8e57437',
            age: 30,
            firstName: 'Mack',
            lastName: 'Santana',
            email: 'macksantana@proflex.com',
        },
        {
            id: '6df82086-4137-436c-894f-952311d68cdc',
            age: 40,
            firstName: 'Stone',
            lastName: 'Pollard',
            email: 'stonepollard@proflex.com',
        },
        {
            id: '1df92e32-9938-48ab-9be2-6476ec7361b1',
            age: 29,
            firstName: 'Cash',
            lastName: 'Shepherd',
            email: 'cashshepherd@proflex.com',
        },
        {
            id: '0eb5869a-1c0c-4626-b79d-daa3bdc8c586',
            age: 24,
            firstName: 'Phoebe',
            lastName: 'Baldwin',
            email: 'phoebebaldwin@proflex.com',
        },
        {
            id: '227d962e-c4b4-4511-a1f2-e814e4bf49af',
            age: 35,
            firstName: 'Bianca',
            lastName: 'Matthews',
            email: 'biancamatthews@proflex.com',
        },
        {
            id: '5c9d42ff-6ee5-467c-a6c9-1639aefeaf52',
            age: 32,
            firstName: 'Blanca',
            lastName: 'Snow',
            email: 'blancasnow@proflex.com',
        },
        {
            id: 'cafc034f-6c4c-4d8f-8e50-3d042805697d',
            age: 30,
            firstName: 'Bobbi',
            lastName: 'Cantrell',
            email: 'bobbicantrell@proflex.com',
        },
        {
            id: 'e55eab53-0fb2-4e41-aa81-3ed0efc3ba61',
            age: 27,
            firstName: 'Marisol',
            lastName: 'Rodriguez',
            email: 'marisolrodriguez@proflex.com',
        },
        {
            id: '68d94491-ad88-4f0a-afd7-d621ee3489f3',
            age: 32,
            firstName: 'Connie',
            lastName: 'Richardson',
            email: 'connierichardson@proflex.com',
        },
        {
            id: '208d968e-9368-4b2c-87e6-9458fed2099c',
            age: 24,
            firstName: 'Brooke',
            lastName: 'Sheppard',
            email: 'brookesheppard@proflex.com',
        },
        {
            id: '89ec8915-230c-42f1-af68-308767fd794b',
            age: 39,
            firstName: 'Powell',
            lastName: 'Justice',
            email: 'powelljustice@proflex.com',
        },
        {
            id: '26b41a11-2da9-4d6a-803b-9ff09f136183',
            age: 24,
            firstName: 'Solis',
            lastName: 'Watkins',
            email: 'soliswatkins@proflex.com',
        },
        {
            id: 'b40acc96-0129-4750-8cf3-516ae56c6d32',
            age: 38,
            firstName: 'Ross',
            lastName: 'Lara',
            email: 'rosslara@proflex.com',
        },
        {
            id: 'f122d9aa-5c3e-4ad7-aadd-f9d16c72e1a7',
            age: 30,
            firstName: 'Santana',
            lastName: 'Whitehead',
            email: 'santanawhitehead@proflex.com',
        },
        {
            id: '7a16deae-42e1-4c4e-a8cd-cad00ce19edf',
            age: 23,
            firstName: 'Norton',
            lastName: 'Burt',
            email: 'nortonburt@proflex.com',
        },
        {
            id: '71edc2a1-4bdf-494c-9cd7-28be5adb9497',
            age: 34,
            firstName: 'Nolan',
            lastName: 'Olson',
            email: 'nolanolson@proflex.com',
        },
        {
            id: '4fa21621-d543-4c6c-b10b-d8b11a60b08e',
            age: 26,
            firstName: 'Chelsea',
            lastName: 'Petersen',
            email: 'chelseapetersen@proflex.com',
        },
        {
            id: '6617a809-8366-4fa1-a957-eba17084ba12',
            age: 32,
            firstName: 'Hazel',
            lastName: 'Chavez',
            email: 'hazelchavez@proflex.com',
        },
        {
            id: '189a7a27-e259-489d-a068-1109324ae5f8',
            age: 24,
            firstName: 'Jolene',
            lastName: 'Webster',
            email: 'jolenewebster@proflex.com',
        },
        {
            id: '25d2cac8-a040-4d8f-9aa3-db21e9d039e1',
            age: 32,
            firstName: 'Rita',
            lastName: 'Mack',
            email: 'ritamack@proflex.com',
        },
        {
            id: '4bb298dd-d102-475e-8d9a-ce13f465c156',
            age: 22,
            firstName: 'Melba',
            lastName: 'Montoya',
            email: 'melbamontoya@proflex.com',
        },
        {
            id: 'c2677acb-84fb-43de-a5ae-609e188dd200',
            age: 30,
            firstName: 'Camille',
            lastName: 'Carter',
            email: 'camillecarter@proflex.com',
        },
        {
            id: 'ed5f0142-1490-4633-8de4-b21040f9025f',
            age: 34,
            firstName: 'Terry',
            lastName: 'Stephens',
            email: 'terrystephens@proflex.com',
        },
        {
            id: '141c9918-e455-4ab1-86ca-a7f16a8b692b',
            age: 28,
            firstName: 'King',
            lastName: 'Richard',
            email: 'kingrichard@proflex.com',
        },
        {
            id: '373c8aa9-1962-4592-9ec8-b47418e5f778',
            age: 38,
            firstName: 'Sherrie',
            lastName: 'Bass',
            email: 'sherriebass@proflex.com',
        },
        {
            id: '4744f827-0024-4644-91c1-514ebc7c5e6b',
            age: 33,
            firstName: 'Tamara',
            lastName: 'House',
            email: 'tamarahouse@proflex.com',
        },
        {
            id: '1fc71453-d8a2-4b8c-80d5-d069d22950bd',
            age: 35,
            firstName: 'Chandler',
            lastName: 'Tanner',
            email: 'chandlertanner@proflex.com',
        },
        {
            id: '802ba59e-b61c-4bb2-8dce-42ff1c185c25',
            age: 36,
            firstName: 'Cristina',
            lastName: 'Long',
            email: 'cristinalong@proflex.com',
        },
        {
            id: '35bcaaba-c17e-4e35-8269-65180230271a',
            age: 27,
            firstName: 'Ann',
            lastName: 'Singleton',
            email: 'annsingleton@proflex.com',
        },
        {
            id: '8193d420-2311-4b15-9ada-f38e4d8e413e',
            age: 40,
            firstName: 'Carmella',
            lastName: 'Martinez',
            email: 'carmellamartinez@proflex.com',
        },
        {
            id: 'fc0d18b5-717c-4472-86bb-a13aee86777c',
            age: 38,
            firstName: 'Harriet',
            lastName: 'Vinson',
            email: 'harrietvinson@proflex.com',
        },
        {
            id: 'bd89dafa-cfb9-4015-a6e2-e30cc4cd6d73',
            age: 34,
            firstName: 'Tonya',
            lastName: 'Chan',
            email: 'tonyachan@proflex.com',
        },
        {
            id: 'c759f489-c016-4097-b9fb-746dda949337',
            age: 24,
            firstName: 'Fitzgerald',
            lastName: 'Morrow',
            email: 'fitzgeraldmorrow@proflex.com',
        },
        {
            id: 'b4a4db98-3abd-40d3-9d81-837ec3825859',
            age: 22,
            firstName: 'Duncan',
            lastName: 'Abbott',
            email: 'duncanabbott@proflex.com',
        },
        {
            id: 'a1afca78-15ee-4c5e-ad03-a78d5b4e17e4',
            age: 34,
            firstName: 'Huff',
            lastName: 'Alston',
            email: 'huffalston@proflex.com',
        },
        {
            id: 'bb9273fc-212a-4fc9-985c-e781180a9a14',
            age: 38,
            firstName: 'Acevedo',
            lastName: 'Knox',
            email: 'acevedoknox@proflex.com',
        },
        {
            id: '8fe965dd-4e4c-4cc6-beaf-692d333aa656',
            age: 26,
            firstName: 'Wolf',
            lastName: 'Hartman',
            email: 'wolfhartman@proflex.com',
        },
        {
            id: '94236198-cbdc-48df-bb60-a4700b82a1c1',
            age: 30,
            firstName: 'Jillian',
            lastName: 'Ross',
            email: 'jillianross@proflex.com',
        },
    ]);

    const onUserClick = (user) => {
        setSelectedUser(user);
    };

    const submitUser = (user) => {
        setUsers(
            users.map((u) => {
                if (u.id === user.id) {
                    return { ...u, ...user };
                }
                return u;
            })
        );
    };

    return (
        <div className='app-container'>
            <UsersList users={users} onUserClick={onUserClick} />
            <UserProfile user={selectedUser} submitUser={submitUser} />
        </div>
    );
}

export default App;

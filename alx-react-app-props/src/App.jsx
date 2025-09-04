
import './App.css'
import Userprofile from './components/UserProfile';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Userprofile userData={userData}/>
    </UserContext.Provider>
  );
}

export default App;


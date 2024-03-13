import Accounts from '../components/Accounts';
import EditProfile from '../components/EditProfile';
import '../styles/User.css';


function User() {
  return (
    <main className="main bg-dark">
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <EditProfile></EditProfile>
    </div>
    <h2 className="sr-only">Accounts</h2>
    <Accounts></Accounts>
  </main>  
  );
}

export default User;

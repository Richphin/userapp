
import Userform from './usercomponents/form';
import Userlist from './usercomponents/userlist';


function App() {
  



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 formcontainer" style={{ backgroundImage: "url(/images/barcelona-morning-sky.jpg)" }}>
          <Userform />
        </div>
        <div className="col-md-6">
          <h2 className="users">USER(S)</h2>
          <Userlist/>
        </div>
      </div>
    </div>
  );
}

export default App;

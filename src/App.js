import './App.css';
import Profile from "./component/Profile"

function App() {
  const Profile={
  myname:"Ramzi" ,
  bio:"24 male from tunisia Gabes living in sfax",
  profession:"software tester",
  Cat:"./cat.jpg"
  }
  const handleClick=() => {
        
    alert(`my name is ${Profile.myname}`)
  };

  return (
    <div className="App">"
    
      <Profile myname={Profile.myname} bio={Profile.bio} profession={Profile.profession} Cat={Profile.Cat}/> 

    </div>
  )
}

export default App


import './App.css';
import Box from './components/box';
import { useState, useEffect } from 'react';
function App() {
  const [user, setUser]= useState("");
  const [photos, setPhotos] = useState ([]);
  const [loggedIn, setLoggedIn]= useState (false);

  const myArray = [{name:"Harry"},{ name:"George"}, {name:"Hermione"},{name:"Mafalda"}];
  const fetchImages = async () =>{
    const response = await fetch ("https://picsum.photos/v2/list");
    const data = await response.json ();
    setPhotos (data);
    console.log (photos);
  }

  useEffect (()=> {
    fetchImages ();
    setLoggedIn (true);
    },[])
// for (let index = 0; index < myArray.length; index++) {
  //   const element = myArray[index];
  //   console.log(element);
  // }
  // This can be rewritten as a map function and the map function can be placed in the JSX below
  return (
    <div className="App">
      <button onClick = {(event)=> setLoggedIn (!loggedIn)}>logged in or out</button>
      {loggedIn?  photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" />
            <h2>{item.author}</h2>
          </div>
        )
      })
    :
    <h2>please login</h2>
    
    }
      {/* <img src='https://picsum.photos/200' alt="stock photo" />
      <br/>
      {/* && is the equivalent of IF statment*/}
      {/* ? and : is the equivalent of IF..ELSE  statment*/}
      <input onChange = {(event)=> setUser (event.target.value)} />
      { user && <Box name={user} />  }
      {/* if user exists then display the username in the Box componens (initialsed false or nothing) */}
      { (user == "Harry") ? <Box name="Harry logged in" />  : <Box name= "Harry not looged in" />}
      {/* if userName==Harry then display Harry loged in ELSE display Harry not logged in */}
      <Box name="Goerge" />
      <Box name="Hermione" />
      <Box name="Mafalda" />
      <Box name="Percy" />

      {myArray.map((item,index) => {return (
        <div>
          <Box name={item.name} />
        </div>
      )})} */}

      </div>
      
  )
      }
export default App;

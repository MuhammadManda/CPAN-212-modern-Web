import { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  //make fetch func
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/data`)
      const data = await response.json();

      setMessage(JSON.stringify(data));
    } catch (error) {
      console.log(error)
 
    }
  }
    const loginForm = async (e) => {
      e.preventDefault();
      const submission ={email,Password}
      try {
        const response = await fetch(`http://localhost:8000/login`, {
          method: "POST",
          headers: { "CONTENT-TYPE": "application/json" },
          body: JSON.stringify(submission)
        });
        const data = await response.json();
        setMessage(JSON.stringify(data))

      }
      catch (error) { console.log(error) }
    }
  
  const fileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",file)
    try {
      const response = await fetch(`http://localhost:8000/fileform`, {
        method: "POST",
        body: formData
      })
      const data = await response.json();
      setMessage(JSON>stringify(data))
    } catch (error) {
      console.log(ERROR)
    }
  }

    return (<div>
      {message}
      <button onClick={fetchData}>Clicke me for Data</button>
      <form onSubmit={loginForm}>
        <input type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }} required/>
        <input type="Password"
          placeholder="Password"
          value={Password}
          onChange={(e) => { setPassword(e.target.value) }}
        required/>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={fileUpload}>
        <input type="file"
          
        onChange={(e)=>{setFile(e.target.value)}}/>
        <button type="submit">"uplaod file</button>
      </form>
    </div>);

  }
export default App;
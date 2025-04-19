import { useState } from "react";

function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    coding: false,
    cooking: false,
    reading: false
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleInput(e){
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value
    })
    if (e.target.type === "checkbox"){
      setFormdata({
        ...formdata,
        [e.target.id]: e.target.checked
      })
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    setIsSubmitted(!isSubmitted)
  }
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        placeholder="Name" 
        id="name" 
        value={formdata.name}
        onChange={handleInput}/><br/>
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        placeholder="Email" 
        id="email" 
        value={formdata.email}
        onChange={handleInput}/>
        <div>
          Interests<br/>
          <label htmlFor="coding">Coding</label>
          <input type="checkbox" id="coding" checked={formdata.coding} onChange={handleInput}/><br/>
          <label htmlFor="reading">Reading</label>
          <input type="checkbox" id="reading" checked={formdata.reading} onChange={handleInput}/><br/>
          <label htmlFor="cooking">Cooking</label>
          <input type="checkbox" id="cooking" checked={formdata.cooking} onChange={handleInput}/>
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      {
        isSubmitted ? <h3>Thank you {formdata.name} for signing up!</h3> : null
      }
    </main>
  );
}

export default App;

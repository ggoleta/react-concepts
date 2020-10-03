import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

import backgroundIMG from './assets/background.jpeg'

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddOroject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title="Homepage" />

      <img width={300} src={backgroundIMG} alt="background" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddOroject}>Adicionar projeto</button>
    </>
  )
}

export default App;
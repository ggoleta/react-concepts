import React, { useState, useEffect } from 'react';
import api from './services/api'

import './App.css';
import Header from './components/Header';

import backgroundIMG from './assets/background.jpeg'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddOroject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Rogério'
    });

    const project = response.data;

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Homepage" />

      <img width={300} src={backgroundIMG} alt="background" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddOroject}>Adicionar projeto</button>
    </>
  )
}

export default App;
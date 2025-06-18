import { useState } from 'react'


const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <p>filter shown with <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      /></p>
    </div>
  )
}

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
      </div>
      <div>
        number: <input 
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.id}>{person.name} {person.number}</li>
      ))}
    </ul>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }
 
  const filteredPersons = filter
    ? persons.filter(person => 
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons
  const personsToShow = filteredPersons.length > 0 ? filteredPersons : persons;


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      
      <h2>add a new</h2>
      <PersonForm 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
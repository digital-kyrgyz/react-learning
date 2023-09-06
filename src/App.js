import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMemo, useState } from 'react';

function App() {

  const genders = [
    { key: 1, value: "Male" },
    { key: 2, value: "Female" }
  ];

  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "Javascript" },
    { key: 3, value: "C#" },
    { key: 4, value: "Java" },
    { key: 5, value: "Golang" },
    { key: 6, value: "SQL" },
    { key: 7, value: "Python" },
    { key: 8, value: "CSS" },
    { key: 9, value: "HTML" }
  ]

  const [name, setName] = useState('Melis');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([]);

  const selectedGender = genders.find(g => g.key == gender);

  return (
    <div className='App'>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <br />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <br />
      <button onClick={() => setName('Albert')}>Change name</button>
      <br />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Choose value</option>
        {
          genders.map(gender => (
            <option value={gender.key} key={gender.key}>{gender.value}</option>
          ))
        }
      </select>
      <pre>{JSON.stringify(selectedGender, null, 2)}</pre>
      <br />
      <hr />
      <select multiple={true} value={categories} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
        {
          categoryList.map(category => (
            <option value={category.key} key={category.key}>{category.value}</option>
          ))
        }
      </select>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div >
  );
}

export default App;

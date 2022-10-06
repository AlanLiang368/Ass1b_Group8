import React, {useState} from 'react';
import SEPractices from "../dummydata/SEPractices"

const optionItems = SEPractices.map((SEPractice) =>
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
);
const Dropdown = ({onSearch}) => {
  const [sePractice, setSePractice] = useState('');
  const [title, setTitle] = useState('');
  return (
    <div>
      <select data-testid={'sePractice'}  value={sePractice} onChange={e => setSePractice(e.target.value)}>
        <option key={'all'} value={''}>Select Se Practice</option>
        {optionItems}
      </select>
      <input data-testid={'title'} value={title} onChange={e => setTitle(e.target.value)} placeholder={'Title'}/>
      <button data-testid={'submit'} onClick={() => {
        onSearch && onSearch({
          title,
          sePractice
        })
      }}>Search</button>
    </div>

  )
}
export default Dropdown;
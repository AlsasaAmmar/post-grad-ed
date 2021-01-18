import React from 'react';
import './Tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

function Tabs({ tabs, onClick, onIconClick, ...props }) {

  return (
    <div>
      <ul className={`tabs ${props.class}`}>
        <li>
          <FontAwesomeIcon className='back-icon' icon={faUndo} onClick={onIconClick} />
        </li>
        {tabs.map(tab =>
          <li key={tab} className='single_tab' onClick={onClick}>{tab}</li>)}
      </ul>
    </div>
  );
}

export default Tabs;

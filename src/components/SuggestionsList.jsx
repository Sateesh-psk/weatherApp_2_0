import React from 'react'

const SuggestionsList = ({ suggestions, onSelect, focusedIndex }) => {
  return (
    <ul className="absolute shadow rounded mt-1">
      {suggestions.map((item, index) => (
        <li
          key={item.id}
          onClick={() => onSelect(item)}
          className={`p-2 max-sm:text-sm min-md:tracking-wider 
            ${index === focusedIndex ? 'text-blue-700' : ''} 
            hover:text-blue-700 cursor-pointer`}
        >
          {item.name},{item.country}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;

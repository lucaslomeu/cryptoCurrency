import React from 'react';
import { Input } from './styledSearch';

function Search({ type, placeholder, onChange }) {
  return <Input type={type} placeholder={placeholder} onChange={onChange} />;
}

export default Search;

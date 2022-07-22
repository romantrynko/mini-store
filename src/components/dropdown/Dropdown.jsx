import React, { useEffect, useState } from 'react';
import { GET_CURRENCIES } from '../../Queries';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { changeCurrency } from '../../actions';

export default function Dropdown() {
  const { data, loading, error } = useQuery(GET_CURRENCIES);
  const dispatch = useDispatch();

  const handleCurrency = (e) => {
    e.preventDefault();
    dispatch(changeCurrency(e.target.value));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <select onChange={handleCurrency}>
      {data &&
        data.currencies.map((item) => {
          return (
            <option value={item.label} key={item.label}>
              {item.label}
            </option>
          );
        })}
    </select>
  );
}

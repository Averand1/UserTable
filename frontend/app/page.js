'use client'
import { useState } from 'react'
import PhonePrice from "@/components/PhonePrice"
import BmwMercedes from "@/components/BmwMercedes"
import AverageIncome from '@/components/AverageIncome'
import LongQuote from '@/components/LongQuote'
import NoDigits from '@/components/NoDigits'
import styled from 'styled-components'

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('phonePrice')

  const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: none;
  font-size: 16px;
  margin-right: 10px;
`;

  const StyledLabel = styled.label`
  font-size: 18px;
  margin-right: 10px;
  `;

  const handleFilterChange = (event) => {
    setSelectedComponent(event.target.value)
  }



  return (
    <div>
      <StyledLabel htmlFor="componentFilter">Select a component:</StyledLabel>
      <StyledSelect id="componentFilter" value={selectedComponent} onChange={handleFilterChange}>
        <option value="Expensive Phones">Phone Price</option>
        <option value="Low Income BMW Mercedes">BMW & Mercedes</option>
        <option value="Average Income">Average Income</option>
        <option value="Long Quote">Long Quote</option>
        <option value="No Digits in Email">No Digits in Email</option>
      </StyledSelect>

      {selectedComponent === 'Expensive Phones' && <PhonePrice />}
      {selectedComponent === 'Low Income BMW Mercedes' && <BmwMercedes />}
      {selectedComponent === 'Average Income' && <AverageIncome/>}
      {selectedComponent === 'Long Quote' && <LongQuote/>}
      {selectedComponent === 'No Digits in Email' && <NoDigits/>}
    </div>
  );
};

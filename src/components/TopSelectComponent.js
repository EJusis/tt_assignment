import React, {useContext} from 'react';
import styled from "styled-components";
import StyledSelect from "./StyledSelect";
import { StyledButton } from "./Button";
import {ReceiptContext} from "../context/ReceiptContext";

const TopSelectComponent = ({ receipt, id }) => {
    const { addCategory, addExpense } = useContext(ReceiptContext)

    const handleChange = (newValue) => {
        const category = {
            id: id,
            category: newValue
        }
        addCategory(category)
    }

    const handleClick = () => {
        const newExpense = {
            expense: {
                note: '',
                price: 0,
                expenseId: Math.floor(Math.random() * 100000)
            },
            id: id
        }
        addExpense(newExpense)
    }

    return (
        <TopSelect>
            <div className='select-container'>
                <StyledSelect changeValue={handleChange}/>
            </div>
            <StyledButton
                variant='accent'
                onClick={handleClick}
                disabled={!receipt.isInitialized}

            >Add expense</StyledButton>
        </TopSelect>
    );
};

export default TopSelectComponent;

const TopSelect = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: #250B38;
  border-radius: 4px;
  height: 60px;
  
  .select-container {
    width: max(170px, 47%)
  }
`
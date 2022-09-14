import React, {useEffect, useContext, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import styled from "styled-components";
import {ReceiptContext} from "../context/ReceiptContext";

const ExpenseComponent = ({ expense, id }) => {
    const { updateExpense } = useContext(ReceiptContext)
    const [note, setNote] = useState('')
    const [price, setPrice] = useState(0)

    const handleChange = (e) => {
        setNote(e.target.value)
    }

    const handleOnValueChange = (value) => {
        setPrice(value === undefined ? 0 : value)
    }

    useEffect(() => {
            const updatedExpense = {
                expense: {
                    note: note,
                    price: Number(price),
                    expenseId: expense.expenseId
                },
                id: id,
                expenseId: expense.expenseId
            }
        updateExpense(updatedExpense)
            // eslint-disable-next-line react-hooks/exhaustive-deps
    },[note, price])


    return (
            <InputWrapper>
                <input className='input-text'
                       type="text"
                       placeholder='Expense name'
                       value={note}
                       onChange={handleChange}
                />
                <CurrencyInput
                    className='input-price'
                    placeholder='€0.00'
                    decimalsLimit={2}
                    prefix='€'
                    allowNegativeValue={false}
                    onValueChange={handleOnValueChange}
                />
            </InputWrapper>
    );
};

export default ExpenseComponent;

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E8DFED;

  input {
    margin: 10px 0;
    color: #52526A;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 21px;
    border: 1px solid #EAE8EC;
    border-radius: 4px;

    ::placeholder,
    ::-webkit-input-placeholder {
      opacity: 0.4;
    }
  }

  .input-text {
    text-align: left;
    padding: 5px 0 5px 5px;
    width: max(238px, 68%);
  }

  .input-price {
    text-align: right;
    padding: 5px 5px 5px 0;
    width: max(91px, 25.5%);
  }
`
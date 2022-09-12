import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import styled from "styled-components";
import {useContext, useState} from 'react';
import {ReceiptContext} from "../context/ReceiptContext";

const ExpenseComponent = ({ expense, id }) => {
    const [note, setNote] = useState('')
    const [cost, setCost] = useState(0)

    const { updateExpense } = useContext(ReceiptContext)


    const handleChange = () => {
        const updatedExpense = {
            expense: {
                note: note,
                price: Number(cost)
            },
            id: id,
            expenseId: expense.expenseId

        }
    }

    return (
            <InputWrapper onChange={handleChange}>
                <input className='input-text'
                       type="text"
                       placeholder='Expense name'
                       value={note}
                       onChange={(e) => setNote(e.target.value)
                       }
                />
                <CurrencyInput
                    className='input-price'
                    placeholder='€0.00'
                    decimalsLimit={2}
                    prefix='€'
                    onValueChange={(values) =>
                        setCost(values)
                    }
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
      color: #52526A;
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
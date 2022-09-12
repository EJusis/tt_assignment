import React from 'react';
import styled from "styled-components";
import {ContainerExpense} from "./styles/ContainerExpense.styled";
import {formatValue} from 'react-currency-input-field';
import {ContainerSingleReceipt} from "./styles/ContainerSingleReceipt.styled";
import TopSelectComponent from "./TopSelectComponent";
import ExpenseComponent from "./ExpenseComponent";

const SingleReceiptComponent = ({ receipt, id }) => {

    const formattedValue = formatValue({
        value: `${receipt.receiptTotal}`,
        groupSeparator: ',',
        decimalSeparator: '.',
        decimalScale: 2,
        prefix: '€',
    })

    return (
        <ContainerSingleReceipt>
            <TopSelectComponent id={id}/>
            <ContainerExpense>
                {receipt.expenses.map((expense, index) =>
                    <ExpenseComponent key={index} expense={expense} id={id}/>
                )}
            </ContainerExpense>
            <SingleReceiptTotal>
                <p>Total</p>
                <span>{formattedValue}</span>
            </SingleReceiptTotal>
        </ContainerSingleReceipt>
    );
};

export default SingleReceiptComponent;

const SingleReceiptTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F4EEF7;
  margin-bottom: 12px;
  padding: 13px 10px;
  border-radius: 0 0 4px 4px;

  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 21px;
    color: #250B38;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 23px;
    color: #250B38;
  }
`


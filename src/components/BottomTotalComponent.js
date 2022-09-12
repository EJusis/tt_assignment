import React, {useContext} from 'react';
import styled from 'styled-components'
import {StyledButton} from "./Button";
import {ReceiptContext} from "../context/ReceiptContext";

const BottomTotalComponent = () => {
    const { addReceipt } = useContext(ReceiptContext)

    const handleClick = () => {
        const newReceipt = {
            category: '',
            expenses: [],
            receiptTotal: 0,
            receiptId: Math.floor(Math.random() * 100000)
        }
        addReceipt(newReceipt)
    }


    return (
        <BottomTotal>
            <div className="text-wrap">
                <h3>Total <span>€55.68</span></h3>
            </div>
            <StyledButton onClick={handleClick}>Add receipt</StyledButton>
        </BottomTotal>
    );
};

export default BottomTotalComponent;

const BottomTotal = styled.footer `
  position: absolute;
  bottom: 0; left: 0;
  padding: 16px 20px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    margin: 0;
    color: #250B38;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 0;
  }
  
  span {
    font-weight: bold;
    margin-left: 10px;
  }
  .text-wrap {
    display: flex;
    align-items: center;
  }
`
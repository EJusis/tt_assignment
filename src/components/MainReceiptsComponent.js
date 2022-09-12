import React, {useContext} from 'react';
import {ContainerMain} from "./styles/ContainerMain.styled";
import {ReceiptContext} from "../context/ReceiptContext";
import SingleReceiptComponent from "./SingleReceiptComponent";

const MainReceiptsComponent = () => {
    const { receipts } = useContext(ReceiptContext)

    return (
        <ContainerMain>
            {receipts.map((receipt, index) =>
                <SingleReceiptComponent
                receipt={receipt}
                key={index}
                id={receipt.receiptId}
                />
            )}
        </ContainerMain>
    );
};

export default MainReceiptsComponent;


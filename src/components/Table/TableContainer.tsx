import { useContext, useState } from "react";
import { Button } from "../Button/Button"
import { Table } from "./Table"
import { TableProps } from "./types"
import { StyledTableContainer } from './styles';
import { AppContext } from "../../App";


export const TableContainer = () => {
    const ctxData = useContext(AppContext);
    const [isValid, setIsValid] = useState(false);
    return (
        <StyledTableContainer>
            <Table setIsValid={setIsValid} />
            {isValid && <Button text='Submit' />}
        </StyledTableContainer>
    )
}
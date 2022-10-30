import React from 'react';
import { ListItemText, styled, ListItem, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Details = styled(ListItem)`
    display: flex;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 7px;
`;

function Trans({ trans, setTransactions, transactions, deleteTransaction }) {

    const sign = trans.amount >= 0 ? '₹' : '- ₹';
    const amount = sign + Math.abs(trans.amount);
    const color = trans.amount >=0 ? '#4cb04c' : '#f27474';

    return (
        <Details style={{ background: `${color}`, color: '#fff' }}>
            <ListItemText>{trans.text}</ListItemText>
            <ListItemText>{amount}</ListItemText>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(trans.id)} />
            </ListItemIcon>
        </Details>
    )
}

export default Trans;
import React from 'react';
import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    & > h5, & > div, & > button {
        margin-top: 30px;
    }
`
const StyledButton = styled(Button)`
    background: #445A6F;
    color: #fff;
`;

function Form({ addTransaction }) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }

    return (
        <Container>
            <Typography variant='h5'>New Transaction</Typography>
            <TextField value={text} label='Enter label' onChange = {(e) => setText(e.target.value)} />
            <TextField value={amount} label='Enter amount' onChange = {(e) => setAmount(e.target.value)} />
            <StyledButton  variant='contained' onClick={newTransaction}> Add transaction </StyledButton >
        </Container>
    )
}

export default Form;
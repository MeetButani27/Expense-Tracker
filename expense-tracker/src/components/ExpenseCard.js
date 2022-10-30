import { Box, styled, Typography, Card, CardContent } from '@mui/material';
import React from 'react';

const Container = styled(Box)`
    display: flex;
    & > div {
        flex: 1;
        margin: 3px;
        padding: 10px;
    }
`

function ExpenseCard({ transactions }) {

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item>0).reduce((acc, item) => (acc+=item), 0).toFixed(2);
    const expense = (amount.filter(item => item<0).reduce((acc, item) => (acc+=item), 0) * -1).toFixed(2);

    return (
        <Container>
            <Card style={{ 'background-color': '#d6d4d4' }}>
                <CardContent>
                    <Typography variant='h6'><b>Income</b></Typography>
                    <Typography style={{ color: 'green', 'font-weight':'500' }}>₹{income}</Typography>
                </CardContent>
            </Card>

            <Card style={{ 'background-color': '#d6d4d4' }}>
                <CardContent>
                    <Typography variant='h6'><b>Expense</b></Typography>
                    <Typography style={{ color: 'red', 'font-weight':'500' }}>₹{expense}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenseCard;
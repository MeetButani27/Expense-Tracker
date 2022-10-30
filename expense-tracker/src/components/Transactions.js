import React from 'react';
import { Box, Divider, styled, List, Typography } from '@mui/material';
import Trans from './Trans';

const Component = styled(Box)`
    & > h5 {
        margin-bottom: 23px;
    }
`;

function Transactions({ transactions, setTransactions, deleteTransaction }) {
  return (
    <Component>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider style={{width: '100%'}} />

        <List>
            {
                transactions.map(t => {
                    return <Trans trans={t} key={t.id} setTransactions={setTransactions} deleteTransaction={deleteTransaction} />
                })
            }
        </List>
    </Component>
  )
}

export default Transactions;
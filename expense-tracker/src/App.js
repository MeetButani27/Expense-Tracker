import './App.css';
import { Box, Typography, styled } from '@mui/material';
import { useState } from 'react';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import Form from './components/Form';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  font-size: 35px;
  font-weight: 700;
  padding-top: 22px;
  padding-bottom: 40px;
  color: #faf141;
`

const Component = styled(Box)`
  display: flex;
  background: #FFF;
  padding: 20px;
  border-radius: 20px;
  margin: auto;
  width: 800px;
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
}
`

function App() {

  const [transactions, setTransactions] = useState([
    // { id: 1, text: 'Pizza', amount: -20},
    // { id: 2, text: 'Salary', amount: 3000},
    // { id: 3, text: 'Shopping', amount: -100},
    // { id: 4, text: 'Bonus', amount: 1500 },
  ])

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  return (
    <Box className="App">
      <Header><u>Expense Tracker</u></Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <Form addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;

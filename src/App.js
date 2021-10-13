import './App.css';


import { BasicTextFields, SelectLabels, BasicButtons } from './Components'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'


function App() {

  const [currency, setCurrency] = useState('PKR')
  const [expense, setExpense] = useState(0)
  const [income, setIncome] = useState(0)
  const [balance, setBalance] = useState(0)
  const [amount, setAmount] = useState(0)
  const [item, setItem] = useState('')
  const [history, setHistory] = useState([])



  let calculate = () => {

    setBalance(balance + +amount)
    const check = amount.toString().slice(0, 1)
    if (check === '-') {
      setExpense(expense + +amount)
    }
    else {
      setIncome(income + +amount)
    }
    let arr = [...history]
    arr.push({
      amount: +amount,
      item: item
    })
    setHistory(arr)
  }

  let deleteItem = (index) => {
    console.log(history[index].amount, 'amount to add/subt')
    let value = history[index].amount;

    setBalance(balance - history[index].amount )
    if (value > 0){
      setIncome(income - value )
    }
    else{
      setExpense(expense - value )
    }


    let arr = [...history]
    arr.splice(index, 1)
    console.log(arr)
    setHistory(arr)

  }



  let getData = (value) => {
    setCurrency(value)
  }

  return (

    <div className='container'>
      <div className='row heading' >
        <div className='col-2'>
          <SelectLabels getCurrency={getData} />
        </div>
        <div className='col-8'>
          <h1 className='heading'>EXPENSE TRACKER </h1>
        </div>
        <div className='col-2 current'>
          <h6>Your Current Balance</h6>
          <h1>{balance} {currency} </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 add-transaction-heading'>
          <h2>Add New Transaction:</h2>
        </div>
        <div className='col-5'>
          <BasicTextFields className='input-field' fullWidth={true} onChange={(e) => setItem(e.target.value)} label='Item' type='text' />
        </div>
        <div className='col-5'>
          <BasicTextFields className='input-field' fullWidth={true} onChange={(e) => setAmount(e.target.value)} label='Amount' type='number' />
        </div>
        <div className='col-2'>
          <BasicButtons className='btn' fullWidth={true} onClick={calculate} >ADD TRANSACTION</BasicButtons>
        </div>


      </div>

      <div className='row left-card'>
        <div className='col-5 myCard'>
          <div className='row green'>
            <h3>INCOME: </h3>
            <h1> {income} {currency} </h1>
          </div>
          <div className='row red'>
            <h3>EXPENSE: </h3>
            <h1> {expense} {currency} </h1>
          </div>
        </div>

        <div className='col-7'>

          <h2>Transaction History</h2>
          {history.map((value, index) => {
            if (value.amount <= 0)

              return (
                <div key={index} className='history red'>
                  <BasicButtons onClick={() => deleteItem(index)} fullWidth={false}> <DeleteIcon /></BasicButtons>
                  <h3>{value.item}</h3>
                  <h3>{value.amount}</h3>
                </div>
              )
            else
              return (
                <div key={index} className='history green'>
                  <BasicButtons onClick={() => deleteItem(index)} fullWidth={false}> <DeleteIcon /></BasicButtons>
                  <h3>{value.item}</h3>
                  <h3>{value.amount}</h3>
                </div>
              )
          })}
        </div>




      </div>
    </div>
  );
}

export default App;

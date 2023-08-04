import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({optionId: event.target.value})
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state

    const filteredTransaction = transactionsList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionsList: filteredTransaction})
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  render() {
    const {titleInput, amountInput, transactionsList, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    console.log(transactionsList)

    return (
      <div className="bg-container">
        <div className="bg-sub-container">
          <div className="money-manager-container">
            <h1 className="greeting-with-name">Hi, Richard</h1>
            <p className="greeting-description">
              Welcome back to your
              <span className="money-manager-text"> Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />
          </div>
          <div className="transaction-container">
            <div className="user-input-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form className="form-container" onSubmit={this.onSubmitForm}>
                <label htmlFor="title" className="title-label">
                  TITLE
                </label>
                <input
                  className="title"
                  onChange={this.onChangeTitle}
                  type="text"
                  id="title"
                  value={titleInput}
                />
                <label htmlFor="amount" className="amount-label">
                  AMOUNT
                </label>
                <input
                  className="amount"
                  onChange={this.onChangeAmount}
                  id="amount"
                  type="text"
                  value={amountInput}
                />
                <label htmlFor="type" className="type-label">
                  TYPE
                </label>
                <select
                  className="type"
                  value={optionId}
                  onChange={this.onChangeType}
                  id="type"
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-sub-container">
                <div className="table-header">
                  <p className="history-items-title">Title</p>
                  <p className="history-items-amount">Amount</p>
                  <p className="history-items-type">Type</p>
                </div>
                <ul className="transaction-items">
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      eachTransaction={eachTransaction}
                      key={eachTransaction.id}
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager

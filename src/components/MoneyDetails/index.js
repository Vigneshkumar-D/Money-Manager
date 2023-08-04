// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="money-details-bg-container">
      <div className="balance-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-text-container">
          <p className="balance-para">Your Balance</p>
          <p className="balance">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="income-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="income-text-container">
          <p className="income-para">Your Income</p>
          <p className="income">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="expenses-text-container">
          <p className="expenses-para">Your Expenses</p>
          <p className="expenses">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails

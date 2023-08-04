// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {id, title, amount, type} = eachTransaction

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-list">
      <p className="transaction-details">{title}</p>
      <p className="transaction-details">{amount}</p>
      <p className="transaction-details">{type}</p>
      <button className="delete-button" onClick={onClickDelete} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-img"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem

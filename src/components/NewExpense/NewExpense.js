import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// in order to get the expense form data to app.js we need to pass it back up to the parent, NewExpense.js.
//we are going to do that by creating a prop on ExpenseForm called onSaveExpenseData, so we can pass data back up via props.
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

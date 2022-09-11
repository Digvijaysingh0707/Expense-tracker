import './ExpenseItem.css'
function ExpenseItem(){
    return(
        <div className='expense-item'>
            <div>Dec 20 2022</div>
            <div className='expense-item__description'>
                <h2>School fee</h2>
                <div className='expense-item__amount'>Rs 2000</div>
            </div>
        </div>
    )
}

export default ExpenseItem
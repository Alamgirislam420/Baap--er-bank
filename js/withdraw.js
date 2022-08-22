// step-1: add event handler with the withdraw button
// step-2: get the withdraw amount from the withdraw amonut field
// 2.5 also make sure convert the input into a number by using parseFloat
// step-3: get previous withdraw total
// step-4: calculat total withdraw amount
// step4-5: set total withdraw amount
// step-5: get the previous balance total
// step-6: calculat new balance total
// step6-5: set new balance total
// step-7: clear the input field

    // step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);
    console.log(newWithdrawAmount);
    
    // step-7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step-7:
    withdrawField.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bap er bank e eto taka nai!!!');
        return;
    }
    
    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

})
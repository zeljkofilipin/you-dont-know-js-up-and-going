const taxRate = 0.25
const phonePrice = 99.99
const accessoryPrice = 9.99
const spendingTreshold = 150
var bankAccountBalance = 500
var total = 0

function totalWithTax (amount) {
  return (amount + amount * taxRate)
}

function formatAmount (amount) {
  return '$' + amount.toFixed(2)
}

// keep buying phones while you still have money
while (bankAccountBalance > 0) {
  total = totalWithTax(phonePrice + accessoryPrice)
  console.log('total: ' + formatAmount(total))

  if ((bankAccountBalance > 0) && (total < spendingTreshold)) {
    bankAccountBalance = (bankAccountBalance - total)
  } else if (total > spendingTreshold) {
    console.log('Too expensive')
  } else if (bankAccountBalance < 0) {
    console.log('Out of money')
  }

  console.log('bankAccountBalance: ' + formatAmount(bankAccountBalance))
}

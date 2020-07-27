console.log('i am inside ts file');
var receiptItems = [
    {
        tax: '25.00',
        Amount: 250
    },
    {
        tax: '25.00',
        Amount: 650
    },
    {
        tax: '25.00',
        Amount: 1150
    }
];
var sum = receiptItems.filter(function (item) { return item.tax == '25.00'; })
    .reduce(function (sum, current) { return sum + current.Amount; }, 0);
console.log(sum);

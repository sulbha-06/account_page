console.log('i am inside ts file');
const receiptItems=[
    {
        tax:'25.00',
        Amount: 250
    },
    {
        tax:'25.00',
        Amount: 650
    },
    {
        tax:'25.00',
        Amount: 1150
    }      
];
const sum = receiptItems.filter(item => item.tax == '25.00')
                        .reduce((sum, current) => sum + current.Amount, 0);
console.log(sum);
                        
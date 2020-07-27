/**
 * Input JSON
 */
var acctData = [
    { acctNum: "AAA - 1234", user: "Alice" },
    { acctNum: "AAA - 5231", user: "Bob" },
    { acctNum: "AAA - 9921", user: "Alice" },
    { acctNum: "AAA - 8191", user: "Alice" },
];
var balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344,
};
// class with member variable as account and balance
class AccountBalance {
    constructor(acctNum, balance) {
        this.acctNum = acctNum;
        this.balance = balance;
    }
}
/**
 * @description:main method to call fiter and sort method on given account detail
 * @param {*} user
 * @param {*} sortBy
 * @param {*} sortDirection
 */
function userAccountOperation(
    user = "",
    sortBy = "acctNum",
    sortDirection = "asc"
) {
    result = iterateresult(acctData, user);
    result.sort(compareValues(sortBy, sortDirection));
    console.log("Account detail for user", user, 'in ', sortDirection, 'order by ', sortBy, ' is\n', result);
}

/**
 * @description: function to filter array of object for given key
 * @param : Array of objects , string
 * @returns: promise
 *
 */
function accfilter(acctData, user) {
    const balanceArray = Object.entries(balance);
    let result = [];
    acctData.filter(function(item) {
        if (item.user == user) {
            balanceArray.forEach(([key, value]) => {
                if (key == item.acctNum) {
                    result.push(new AccountBalance(key, value));
                }
            });
        }
    });
    return result;
}

function iterateresult(acctData, user) {
    let result = accfilter(acctData, user);
    if (Array.isArray(result) && result.length) {
        result.forEach((item) => {
            console.log("Account detai for user", user, "is-->", item);
        });
        return result;
    } else {
        console.log("account detail not found for user -", user);
        return;
    }
}

/**
 * @description: function to sort an array of object in given order for given key
 * @param: string,string
 * @return: array of object
 */
function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }
        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
}

//function calling
iterateresult(acctData, "Bob");
iterateresult(acctData, "Charlie");
console.log(acctData.sort(compareValues('acctNum')));
userAccountOperation("Alice", "balance");
function getPasswordChecker(password) {
    return function(userpass) {
        if (password === userpass) {
            return true
        }
        return false
    }
}

let user = getPasswordChecker('Trump')


console.log(user('Clinton'))
console.log(user('Bush'))
console.log(user('Trump'))
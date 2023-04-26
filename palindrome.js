str = "Madam"
str = str.toLowerCase();

function checkPalindrome(str) {
    str_rev = str.split(" ").reverse().join(" ")
    if (str == str_rev) {
        return true
    } else {
        return false
    }
}

var ispalindrome = checkPalindrome(str)
if (ispalindrome) {
    console.log("This is palindrome")

} else {

    console.log("This is not palindrome")
}

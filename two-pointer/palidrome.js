let a = ['a','b','b','a'];
let isPalindrome = true;

for(let i = 0; i < a.length / 2; i++){
    if(a[i] !== a[a.length - 1 - i]){
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome); // true
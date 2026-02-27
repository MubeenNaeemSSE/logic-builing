let a = [1,1,2,2,3,3];
let res = [];

for(let i = 0; i < a.length; i++){
    if(a[i] !== a[i+1]){  // agar next element same nahi hai
        res.push(a[i]);
    }
}

console.log(res); // [1, 2, 3]

var arr = []

function push() {
    var input = document.getElementById("input").value;
    arr.push(input)
    document.getElementById("result").textContent = "[" + arr + "]"

    document.getElementById("input").value=""



}

function concat() {
    var text1 = []
    var text2 = prompt("enter the concat items");
    text1 = arr.concat(text2)
    document.getElementById("result").textContent = "[" + text1 + "]"
}

function slice() {
    var a = parseInt(prompt("enter number"))
    var b = parseInt(prompt("enter remove number"))
    arr = arr.slice(a, b)
    document.getElementById("result").textContent = "[" + arr + "]"
}

function pop() {
    arr.pop()
    document.getElementById("result").textContent = "[" + arr + "]"
    document.getElementById("input").value=""

}

function sort() {
    arr.sort()
    document.getElementById("result").textContent = "[" + arr + "]"
    document.getElementById("input").value=""

}

function filter() {
    var filter = parseInt(prompt("enter a value to filter"))

    function check() {
        if (filter == age) {
            return arr = filter
        }
    }

    document.getElementById("result").textContent = ar.filter(check)
}

function find() {
    
    var findValue = parseInt(prompt("enter a value to find"));

    function check(age) {
        return age < findValue
    }

    var find = ar.find(check)
    document.getElementById("result").textContent = find

}

function shift() {
    arr.shift()
    document.getElementById("result").textContent = "[" + arr + "]"
    document.getElementById("input").value=""

}

function unshift() {
    var input2 = prompt("Enter a value to unshift")
    arr.unshift(input2)
    document.getElementById("result").textContent = "[" + arr + "]"
}

function reverse() {
    arr.reverse()
    document.getElementById("result").textContent = "[" + arr + "]"
    document.getElementById("input").value=""

}

function del(){
    var delet = parseInt(prompt("Enter a index Value to Delete"))
    delete arr[delet]
    document.getElementById("result").textContent = "[" + arr + "]"
}

function splice(){
    var a= parseInt (prompt("Enter a value to unshift"))
    var b= parseInt (prompt("Enter a value to unshift"))
    arr.splice(a,b)
    document.getElementById("result").textContent = "[" + arr + "]"
}
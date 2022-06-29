function reduceNumber() {
    let obj = document.getElementsByClassName('reduceBtn')
    for (let i = 0; i < obj.length; i++) {
        obj[i].onclick = function () {
            let parentElement = this.parentElement.parentElement;
            let value = parseInt(parentElement.querySelector('.summary').innerHTML)
            value-=1
            if (value >= 0) {
                parentElement.querySelector('.summary').innerHTML = value
            }
        }
    }
}

function addNumber() {
    let obj = document.getElementsByClassName('addBtn')
    for (let i = 0; i < obj.length; i++) {
        obj[i].onclick = function () {
            let parentElement = this.parentElement.parentElement;
            let value = parseInt(parentElement.querySelector('.summary').innerHTML)
            value+=1
            parentElement.querySelector('.summary').innerHTML = value
        }
    }
}
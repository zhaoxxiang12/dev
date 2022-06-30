function reduceNumber() {
    let obj = document.getElementsByClassName('reduceBtn')
    for (let i = 0; i < obj.length; i++) {
        obj[i].onclick = function () {
            let parentElement = this.parentElement.parentElement;
            let value = parseInt(parentElement.querySelector('.summary').innerHTML)
            value -= 1
            if (value >= 1) {
                parentElement.querySelector('.summary').innerHTML = value
                total(parentElement)
            } else {
                let delElement = parentElement.closest('.goodsList')
                parentElement.closest('.goods').removeChild(delElement)
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
            value += 1
            parentElement.querySelector('.summary').innerHTML = value
            total(parentElement)
        }
    }
}

function total(parentElement) {
    let price = parseFloat(parentElement.closest('.goodsList').querySelector('.price').innerHTML.split('¥')[1])
    let number = parseInt(parentElement.closest('.goodsList').querySelector('.summary').innerHTML)
    parentElement.closest('.goodsList').querySelector('.total').innerHTML = '¥' + (price * number)
}
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
                summary()
            } else {
                let delElement = parentElement.closest('.goodsList')
                parentElement.closest('.goods').removeChild(delElement)
                updateAll()
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
            summary()
        }
    }
}

function total(parentElement) {
    let price = parseInt(parentElement.closest('.goodsList').querySelector('.price').innerHTML.split('¥')[1])
    let number = parseInt(parentElement.closest('.goodsList').querySelector('.summary').innerHTML)
    parentElement.closest('.goodsList').querySelector('.total').innerHTML = '¥' + (price * number)
}

function updateAll () {
    let son = document.querySelectorAll('.goodsList input[type="checkbox"]').length
    let checkedSon = document.querySelectorAll('.goodsList input[type="checkbox"]:checked').length
    document.querySelector('.goods .settle .item:first-child .min-item:first-child input[type="checkbox"]')
        .checked = son!==0&&checkedSon === son;
}

function summary () {
    let number = 0;
    let summaryMoney = 0;
    let checkedSon = document.querySelectorAll('.goodsList [type="checkbox"]:checked');
    for (let i = 0; i < checkedSon.length; i++) {
        let checkedElement = checkedSon[i].closest('.goodsList');
        number+=parseInt(checkedElement.querySelector('.summary').innerHTML);
        summaryMoney+=parseFloat(checkedElement.querySelector('.total').innerHTML.split('¥')[1])
    }
    document.querySelector('.goods .settle .item:last-child .min-item:first-child span:first-child font')
        .innerHTML = number
    document.querySelector('.goods .settle .item:last-child .min-item:first-child span:last-child font')
        .innerHTML = '¥' + summaryMoney
}

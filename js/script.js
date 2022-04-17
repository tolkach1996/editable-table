function dblclck(e) {
    let el = e.target;
    let ell = el.innerHTML;
    el.innerHTML = "";
    let newInput = document.createElement('input')
    newInput.value = ell;
    el.prepend(newInput)
    newInput.focus();
    newInput.addEventListener("focusout", function () {
        el.innerHTML = newInput.value
        newInput.remove();
    })
}

function fuctionAddstr() {
    let alltd = document.querySelectorAll('.table__td')
    let alltr = document.querySelectorAll('.table__tr')
    let std = alltd.length / alltr.length
    let newtr = document.createElement('tr')
    newtr.classList.add("table__tr")
    for (i = 0; i < std; i++) {
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        newtr.prepend(newtd)
        newtd.remove
    }
    table.append(newtr)
    newtr.remove
}

function fuctionAddstrup() {
    e = targetElement.parentNode
    let alltd = document.querySelectorAll('.table__td')
    let alltr = document.querySelectorAll('.table__tr')
    let std = alltd.length / alltr.length
    let newtr = document.createElement('tr')
    newtr.classList.add("table__tr")
    for (i = 0; i < std; i++) {
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        newtr.prepend(newtd)
        newtd.remove
    }
    e.before(newtr)
    newtr.remove
}

function fuctionAddstrdown() {
    e = targetElement.parentNode
    let alltd = document.querySelectorAll('.table__td')
    let alltr = document.querySelectorAll('.table__tr')
    let std = alltd.length / alltr.length
    let newtr = document.createElement('tr')
    newtr.classList.add("table__tr")
    for (i = 0; i < std; i++) {
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        newtr.prepend(newtd)
        newtd.remove
    }
    e.after(newtr)
    newtr.remove
}

function fuctionAddcolumn() {
    let alltr = document.querySelectorAll('.table__tr')
    for (let i of alltr) {
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        i.append(newtd)
    }
}

function fuctionAddcolumnleft() {
    let alltr = document.querySelectorAll('.table__tr')
    let index = targetElement.cellIndex;
    for (let i of alltr) {
        let str = i.children
        i = str[index]
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        i.before(newtd)
    }
}

function fuctionAddcolumnright() {
    let alltr = document.querySelectorAll('.table__tr')
    let index = targetElement.cellIndex;
    for (let i of alltr) {
        let str = i.children
        i = str[index]
        let newtd = document.createElement('td')
        newtd.classList.add("table__td")
        newtd.innerHTML = "текст"
        i.after(newtd)
    }
}

function contextMenu(e) {
    e.preventDefault();
    targetElement = e.target
    const leftX = e.pageX
    const topY = e.pageY
    let contextmenu = document.querySelector(".contextmenu");
    contextmenu.className = "contextmenu__add contextmenu"
    contextmenu.style.top = `${topY}px`;
    contextmenu.style.left = `${leftX}px`;

    let delcontextMenu = document.querySelector('body')
    delcontextMenu.addEventListener("click", function () {
        contextmenu.classList = "contextmenu__del contextmenu"
    }, true);
}

let targetElement;

let table = document.querySelector('tbody')
table.addEventListener('dblclick', dblclck, true);

let addtr = document.querySelector('.addtr')
addtr.addEventListener('click', fuctionAddstr, true)

let addtd = document.querySelector('.addtd')
addtd.addEventListener('click', fuctionAddcolumn, true)

let contextmenu = document.getElementById("tableid");
contextmenu.addEventListener('contextmenu', contextMenu, true);

let addstrup = document.getElementById('addstrup')
addstrup.addEventListener('click', fuctionAddstrup, true)

let addstrdown = document.getElementById('addstrdown')
addstrdown.addEventListener('click', fuctionAddstrdown, true)

let addcolumnleft = document.getElementById('addcolumnleft')
addcolumnleft.addEventListener('click', fuctionAddcolumnleft, true)

let addcolumnright = document.getElementById('addcolumnright')
addcolumnright.addEventListener('click', fuctionAddcolumnright, true)

let delstr = document.getElementById('delstr');
delstr.addEventListener('click', function () {
    let delitestr = targetElement.parentNode;
    delitestr.remove();
})

let delcolumn = document.getElementById('delcolumn');
delcolumn.addEventListener('click', function () {
    let i = targetElement.cellIndex;
    let alltr = document.querySelectorAll('.table__tr')
    for (let str of alltr) {
        let delitecolumn = str.children[i];
        delitecolumn.remove();
    }
}, true)


/**/
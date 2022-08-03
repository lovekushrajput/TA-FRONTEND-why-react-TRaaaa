let input = document.querySelector('input')
let root = document.querySelector('.root')

let allMovie = []

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (e.target.value) {
            allMovie.push({
                name: e.target.value,
                watched: false
            })

            e.target.value = ''
            createUI(allMovie)
        } else {
            alert('Invalid input')
        }

    }
})

function handleClick(e) {
    if (e.target.id) {
        let id = e.target.id
        allMovie[id].watched ? allMovie[id].watched = false : allMovie[id].watched = true
        createUI(allMovie)
    }
}

function createElement(type, attr = {}, ...children) {
    let element = document.createElement(type)
    for (let key in attr) {
        element[key] = attr[key]
    }

    children.forEach((child) => {
        if (typeof child === 'object') {
            element.append(child)
        } else {
            let node = document.createTextNode(child)
            element.append(node)
        }
    })
    return element
}

function createUI(arr) {
    root.innerHTML = ''
    arr.forEach((elm, i) => {
        let li = createElement('li', {},
            createElement('p', {}, elm.name),
            createElement('span', { id: i }, elm.watched ? 'watched' : 'To watched')
        )
        li.addEventListener('click', handleClick)
        root.append(li)
    });

}



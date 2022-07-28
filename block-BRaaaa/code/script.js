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

function createUI(arr) {
    root.innerHTML = ''
    arr.forEach(elm => {
        let li = document.createElement('li')
        let p = document.createElement('p')
        p.innerText = elm.name
        let span = document.createElement('span')
        elm.watched ? span.innerText = 'watched' : span.innerText = 'To watched'
        span.addEventListener('click', click)
        li.append(p, span)
        root.append(li)
    });

}


function click(e) {
    let r = e.target.parentElement.children[0].innerText
    index = allMovie.findIndex(x => x.name === r);
    allMovie[index].watched ? allMovie[index].watched = false : allMovie[index].watched = true
    createUI(allMovie)
}
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
    let id = e.target.id
    allMovie[id].watched ? allMovie[id].watched = false : allMovie[id].watched = true
    createUI(allMovie)
}

function createUI(arr) {
   let movieUi = arr.map((elm, i) => {
        let li = React.createElement(
            'li',
            null,
            React.createElement('p', null, elm.name),
            React.createElement('span', { id: i, onClick: handleClick }, elm.watched ? 'watched' : 'To watched'))
            return li
    });
    ReactDOM.render(movieUi, root)
}

import colors from '../data/colors.json'
import Ui from './Ui'

function Box() {
    let colorsArr = []
    for (let color in colors) {
        colorsArr.push(color)
    }
    return (colorsArr.map((color) => <Ui key={color} val={color} ar={colors} />))
}


export default Box;

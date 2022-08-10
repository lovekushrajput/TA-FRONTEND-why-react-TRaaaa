import ClickMeBtn from "./Button-1";
import HelpBtn from "./Button-2";
import Btns from "./3-Buttons";
import Fruitbtns from "./Fruitsbtn";
import './style/index.css'

function App() {
    return (
        <>

            <h1>OnClick Events on Buttons </h1>
            <div className="wrapper">
                <ClickMeBtn />
                <HelpBtn />
                <Btns />
                <Fruitbtns />
            </div>
        </>
    )
}


export default App;
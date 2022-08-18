import Boxes from './Boxes';

function Ui(props) {
    return (
        <section>
            <article className='single'>
                <h2>{props.val}</h2>
                <p className='text-light'>colors.{props.val}</p>
            </article>

            <article className='boxes flex'>
                {props.ar[props.val].map((color, i) => <Boxes key={color} color={color} index={i} />)}
            </article>


        </section>
    )

}




export default Ui;
import Progress from './Progress'
let data = [{ name: 'Web Design', score: 85 }, { name: 'Photography', score: 90 }, { name: 'Content Marketing', score: 75 }, { name: 'CMS Admin', score: 70 }]

function About() {
    return (
        <section className="about padding">
            <div className="container flex align-start">
                <div className="flex-40">
                    <header className="sec-header">
                        <h2 className="heading">Let us introduce</h2>
                        <div className="dot-wrapper flex justify-start">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </header>

                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Similique ut sequi voluptatibus beatae corporis repellat
                        asperiores fugit debitis corrupti nesciunt nam doloribus animi qui
                        illum, recusandae nisi neque iusto culpa!
                    </p>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex-30 progress">
                    {/* Progress component */}
                    {data.map((elm) => <Progress key={elm.score} {...elm} />)}
                    
                </div>
                <div className="flex-30">
                    <img
                        className="flexible-img about-img"
                        src={'/images/about-image.jpg'}
                        alt="About Image"
                    />
                </div>
            </div>
        </section>
    )

}

export default About;
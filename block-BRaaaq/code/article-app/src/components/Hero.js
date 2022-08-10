function Hero() {
    return (
        <article className='container'>
            <div className='hero flex space'>

                <figure>
                    <img src={'https://www.gizmochina.com/wp-content/uploads/2022/08/iPhone-14-Lineup-Feature-Teal.jpg'} alt={';'} />
                </figure>
                <div className='width-55'>
                    <h2>
                        <a href="https://www.gizmochina.com/2022/08/08/iphone-14-series-launch-could-get-delayed-due-to-china-taiwan-tension/">iphone 14 series launch could get delayed due to China-Taiwan tension</a>
                    </h2>
                    <p>
                        The upcoming iPhone 14 series from Apple, which is expected to launch in September, could be delayed. A recent report claims that the ongoing political tension between China and Taiwan may cause Apple to postpone the release of the iPhone 14 series.
                    </p>

                    <p>Apple has reportedly urged its Taiwanese suppliers to adhere to China’s new rules, prohibiting labeling products as “made in Taiwan, China” or “Chinese Taipai.”</p>
                </div>
            </div>


        </article>
    )
}

export default Hero;
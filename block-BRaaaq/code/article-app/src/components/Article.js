import propTypes from 'prop-types';

function Article(props) {
    return (
        <div className='article flex space width-50'>
            <figure className=''>
                <img src={props.urlToImage} alt={';'} />
            </figure>

            <div>
                <h2 className='margin-bottom font-1'>
                    <a className='black' href={props.url}>{props.title}</a>
                </h2>
                <strong className='margin-bottom'>{props.author}</strong>

                <p className='line-height'>{props.description}...</p>
            </div>

        </div>
    )
}


Article.propTypes = {
    urlToImage: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}

export default Article;
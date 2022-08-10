import Data from "./data/Data"
import Article from "./Article";

function Articles() {
    return (
        <article className='container'>
            <div className='div flex'>
                {Data.map((article) => <Article key={article.author} {...article} />)}
            </div>
        </article>
    )
}

export default Articles;
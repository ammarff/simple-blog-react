import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function BlogDetail() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const params = useParams()

    useEffect(function(){
        async function getArticles() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            
            if(!request.ok) {
                setLoading(false)
                
                return setNotFound(true)
            }

            const response = await request.json()

            setArticles(response);
            setLoading(false)
        }
        getArticles()
    },[params])

    if (notFound) {
        return <h1>Artikel tidak ditemukan ):</h1>
    }

    return (
        <section className='section'>
            {loading ? (
                <i>Loading article ...</i>
            ) : (
                <article className='article'>
                    <h1 className='article-title'>{articles.title}</h1>
                    <time className='article-time'>{new Date(articles.publishedAt).toLocaleDateString()}</time>
                    <img src={articles.imageUrl} alt={articles.title} className='article-img'/>
                    <p className='article-summary'>{articles.summary}</p>
                    <p className='article-src'> 
                        Source:{' '}
                        <a href={articles.url} target='_blank' rel="noreferrer">
                            {articles.newsSite}
                        </a>
                    </p>
                </article>
            )}
        </section>
    )
}
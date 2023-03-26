import { useEffect } from "react"

export default function Profile(){
    useEffect(function(){
        document.title = 'Profile'
    },[])
    return (
        <section className="section">
            <h1 className="section-title">Pofile</h1>
            <p className="section-desc">
                Halo namaku ammar, aku adalah seorang web developer yang baru saja lulus dari telkom university
            </p>
        </section>
    )
}
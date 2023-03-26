import { useEffect } from "react"

export default function Home(){
    useEffect(function() {
        document.title = 'Home';
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Selamat datang di website ku</h1>
            <p className="section-desc">Halo semua, ini websiteku. kamu bisa mendapatkan informasi seputar dunia disini</p>
        </section>
    )
}
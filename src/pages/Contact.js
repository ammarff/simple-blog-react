import { useEffect } from "react"

export default function Contact(){

    useEffect(function(){
        document.title = 'Contact'
    },[])

    return(
        <section className="section">
            <h1 className="section-desc">Contact Page</h1>
            <p className="section-desc">Please contact me on:</p>
            <ul>
                <li>WA: 0827197123</li>
                <li>Email: ammar@gmail.com</li>
            </ul>
            <p className="section-desc">Follow me on sosial media:</p>
            <ul>
                <li>Facebook: <a href="https://facebook.com">Facebook</a></li>
                <li>Facebook: <a href="https://facebook.com">Twitter</a></li>
            </ul>
        </section>
    ) 
}
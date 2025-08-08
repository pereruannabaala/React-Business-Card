import { CiLinkedin } from "react-icons/ci"
import { SiGmail } from "react-icons/si"
import SocialMedia from "./SocialMedia"

export default function Info () {
    return(
        <section>
            <div className="content">
                <h1>Pereruan Nabaala</h1>
                <p>Software Engineer</p>
                <div className="button">
                    <button
                        className="transparent-btn"
                        type="button"
                        onClick={() => window.open("https://www.linkedin.com/in/pereruannabaala", "_blank")}
                    >
                        <CiLinkedin /> Linkedin
                    </button>

                    <button type="button"
                        className="transparent-btn"
                        onClick={() => window.location.href = "mailto:pereruannabaala@gmail.com"}
                    >
                        <SiGmail />Email
                    </button>
                </div>
                <SocialMedia />
            </div> 

        </section> 
    )
}

import { FaGithub, FaMedium, FaInstagram} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="icon-button">

      <div className="button-container">
        <button
          className="round-btn"
          onClick={() => window.open("https://github.com/pereruannabaala", "_blank")}
        >
          <span className="icon"><FaGithub /></span>
        </button>
        <div className="label">GitHub</div>
      </div>

      <div className="button-container">
        <button
          className="round-btn"
          onClick={() => window.open("https://medium.com/@pereruannabaala", "_blank")}
        >
          <span className="icon"><FaMedium /></span>
        </button>
        <div className="label">Medium</div>
      </div>

      <div className="button-container">
        <button 
          className="round-btn"
          onClick={() => window.open("https://www.instagram.com/pereruannabaala", "_blank")}
        >
          <span className="icon"><FaInstagram /></span>
        </button>
        <div className="label">Instagram</div>
      </div>
    </div>

  )
}

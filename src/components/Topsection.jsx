import avatar from '../assets/profile-picture.png'
export default function TopSection () {
    return(
        <header>
            <div className="top" aria-hidden="true">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 H100 V60 C75,85 25,85 0,60 Z" fill="#f6efe8"></path>
                </svg>
            </div>

            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>

    </header>
    )
}
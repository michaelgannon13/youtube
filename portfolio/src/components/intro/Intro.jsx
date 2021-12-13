import './intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2>Hello, my name is </h2>
                    <h1>Michael</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">UI Developer</div>
                            <div className="i-title-item">UX Designer</div>
                            <div className="i-title-item">Cool Guy</div>
                            <div className="i-title-item">Crypto head</div>
                            <div className="i-title-item">Company Owner</div>
                        </div>
                    </div>
                    <div className="i-description">
                        I design and develop web-apps with an emphasis on compelling user experience.
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Intro

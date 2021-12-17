import './about.css'
import Award from '../../images/award.png';

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className="a-img" src="https://images.pexels.com/photos/5496467/pexels-photo-5496467.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5496467.jpg&fm=jpg" alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>
                <p className="a-sub">
                    Some details about me
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem lacus, rutrum et laoreet a, bibendum ac augue. Aenean tempor augue libero, at imperdiet urna elementum vitae. 
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Award</h4>
                        <p className="a-award-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem lacus, rutrum et laoreet a, bibendum ac augue. Aenean tempor augue libero, at imperdiet urna elementum vitae. Vestibulum dignissim ante pharetra erat porta sollicitudin. Nunc eget nibh non erat bibendum facilisis. Duis eget risus sit amet ipsum placerat dignissim luctus at dolor. Praesent faucibus auctor purus, ac cursus ex mollis at. Nam quis porttitor urna, nec eleifend velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in nibh a est eleifend porttitor. Maecenas volutpat, dolor sit amet bibendum cursus, diam sapien rutrum arcu, ac dignissim lectus nulla id eros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

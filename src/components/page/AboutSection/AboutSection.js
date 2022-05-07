import './AboutSection.css'
import photo from './../../../Assets/Image/photo.jpeg'

function AboutSection() {
    return (
        <section className='about-section'>
            <h2 className='section-title'>
                About me
            </h2>
            <div className='div1'>
                <div>
                    <div>
                        <p>
                            Hello! My name is David, I'm Brazilian and Spanish citizen.
                        </p>
                        <p>
                            My technological stack is:
                        </p>
                    </div>
                    <ul className='tech-work'>
                        <li>Swift</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                        <li>TypeScript</li>
                    </ul>
                </div>
                <div>
                    <img src={photo} alt='photo' className='photo' />
                </div>
            </div>
        </section>
    )
}

export default AboutSection
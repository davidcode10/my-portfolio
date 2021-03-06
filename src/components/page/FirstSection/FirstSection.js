import Typewriter from 'typewriter-effect'
import './FirstSection.css'

function AboutSection() {
    return (
        <section className='About-Section'>
            <div className='cheers'>
                <h1>Hi, my name is</h1>
            </div>
            <div>
                <h2 className='name'>David.</h2>
            </div>
            <div>
                <h3 className='my-work'>I like to build things in the internet.</h3>
            </div>
            <div className='text-first-section'>
                <p>I'm a
                    <span className='typewriter-effect'>
                        <Typewriter
                            options={{
                                strings: ['iOS', 'Web'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </span>
                    Developer specializing in ReactJs and Swift.
                </p>
            </div>
        </section>
    )
}

export default AboutSection
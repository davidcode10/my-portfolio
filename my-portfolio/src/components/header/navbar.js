import './navbar.css'
import { Container } from 'react-bootstrap'

function NavBar() {
    function refreshPage() {
        window.location.reload(false)
    }
    function aboutScroll() {
        alert('This will scroll to about section')
    }
    function workScroll() {
        alert('This will scroll to work section')
    }
    function contactScroll() {
        alert('This will scroll to contact section')
    }
    return (
        <header>
            <nav>
                <div>
                    <h1 className='logo-name'>
                        <a onClick={refreshPage}>David.</a>
                    </h1>
                </div>
                <div>
                    <ol className='nav-list'>
                        <li>
                            <a className='nav-button' onClick={aboutScroll}>About</a>
                        </li>
                        <li>
                            <a className='nav-button' onClick={workScroll}>Work</a>
                        </li>
                        <li>
                            <a className='nav-button' onClick={contactScroll}>Contact</a>
                        </li>
                        <li>
                            <a className='resume' href='https://app.luminpdf.com/viewer/6252f7255413f2e082f17410' target='_blank'>Resume</a>
                        </li>
                    </ol>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
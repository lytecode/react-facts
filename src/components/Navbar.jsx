import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='react-logo' src={reactLogo} alt='React logo' />
            <h3 className='react-facts'>ReactFacts</h3>
            <h4 className='course-name'>React Course - Project 1</h4>
        </nav>
    )
}
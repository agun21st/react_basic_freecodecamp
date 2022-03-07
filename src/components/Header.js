import Logo from '../images/logo/Troll_Face.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={Logo} alt="Logo" className="brand--img" />
            </a>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <h4 className='text-white mb-0'>Meme Generator</h4>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn btn-primary" type="button">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}

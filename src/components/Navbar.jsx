
const Navbar = ({setCategory}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"> <span className="badge bg-light text-dark fs-6">Newz Nation</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item" onClick={()=>setCategory('technology')}>
                  <div className="nav-link active" >Technology</div>
                </li>
                <li className="nav-item" onClick={()=>setCategory('sports')}>
                  <div className="nav-link active"  >Sports</div>
                </li>
                <li className="nav-item" onClick={()=>setCategory('business')}>
                  <div className="nav-link active" >Business</div>
                </li>
                <li className="nav-item" onClick={()=>setCategory('health')}>
                  <div className="nav-link active" >Health</div>
                </li>
                <li className="nav-item" onClick={()=>setCategory('science')}>
                  <div className="nav-link active" >Science</div>
                </li>
               
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
export default Navbar
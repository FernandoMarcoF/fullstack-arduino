import { Link } from 'react-router-dom';

export const TopNavBar = () => {
  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-menu-bt d-flex align-items-center">
            <div className="wrapper-menu">
              <div className="main-circle"><i className="ri-menu-line" /></div>
              <div className="hover-circle"><i className="ri-close-fill" /></div>
            </div>
            <div className="iq-navbar-logo d-flex justify-content-between ml-3">
              <Link to="/panel" className="header-logo link-styled">
                <img src="/src/assets/images/logo.png" className="img-fluid rounded" alt='' />
                <span>CRV</span>
              </Link>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <i className="ri-menu-3-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-list">
              <li className="nav-item">
                <a href="#" className="search-toggle iq-waves-effect language-title" ><span className="ripple rippleEffect" style={{ width: 98, height: 98, top: '-15px', left: '56.2969px' }} /><img src="/src/assets/images/small/flag-03.png" alt="img-flaf" className="img-fluid mr-1" style={{ height: 16, width: 16 }} /> ES <i className="ri-arrow-down-s-line" /></a>
                <div className="iq-sub-dropdown">
                  <a href="#" className="iq-sub-card" ><img src="/src/assets/images/small/flag-01.png" alt="img-flaf" className="img-fluid mr-2" />English</a>
                </div>
              </li>
              <li className="nav-item nav-icon">
                <a href="#" className="search-toggle iq-waves-effect bg-primary rounded">
                  <i className="ri-notification-line" />
                  <span className="bg-danger dots" />
                </a>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ul className="navbar-list">
            <li className="line-height">
              <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                <img src="/src/assets/images/user/1.jpg" className="img-fluid rounded mr-3" alt="user" />
                <div className="caption">
                  <h6 className="mb-0 line-height">Ana</h6>
                  <p className="mb-0">Administrador</p>
                </div>
              </a>
              <div className="iq-sub-dropdown iq-user-dropdown">
                <div className="iq-card shadow-none m-0">
                  <div className="iq-card-body p-0 ">
                    <div className="bg-primary p-3">
                      <h5 className="mb-0 text-white line-height">Hola Ana</h5>
                      <span className="text-white font-size-12">Disponible</span>
                    </div>
                    <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                      <div className="media align-items-center">
                        <div className="rounded iq-card-icon iq-bg-primary">
                          <i className="ri-file-user-line" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="mb-0 ">Mi perfil</h6>
                          <p className="mb-0 font-size-12">Ver detalles del perfil personal.</p>
                        </div>
                      </div>
                    </a>
                    <div className="d-inline-block w-100 text-center p-3">
                      <Link to="/" className="bg-primary iq-sign-btn" role="button">Desconectar<i className="ri-login-box-line ml-2" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

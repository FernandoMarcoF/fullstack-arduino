import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="iq-sidebar">
      <div className="iq-navbar-logo d-flex justify-content-between">
        <Link to="/panel" className="header-logo">
          <img src="/src/assets/images/logo.png" className="img-fluid rounded" alt='' />
          <span>CRV</span>
        </Link>
        <div className="iq-menu-bt align-self-center">
          <div className="wrapper-menu">
            <div className="main-circle"><i className="ri-menu-line" /></div>
            <div className="hover-circle"><i className="ri-close-fill" /></div>
          </div>
        </div>
      </div>
      <div id="sidebar-scrollbar">
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <a href="#dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span className="ripple rippleEffect" /><i className="las la-home iq-arrow-left" /><span>Panel</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
              <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                <li className="active"><Link to="/panel"><i className="las la-laptop-code" />Panel de cuenta</Link></li>
              </ul>
            </li>
            <li>
              <a href="#userinfo" className="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span className="ripple rippleEffect" /><i className="las la-user-tie iq-arrow-left" /><span>Usuarios</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
              <ul id="userinfo" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle" style={{}}>
                <li><Link to="/listausuario"><i className="las la-th-list" />Lista Usuarios</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="p-3" />
      </div>
    </div>
  )
}
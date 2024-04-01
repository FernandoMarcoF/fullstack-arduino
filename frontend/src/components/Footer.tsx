import { Link } from 'react-router-dom';

export const Footer = ()=> {
  return (
  <footer className="iq-footer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6">
        <ul className="list-inline mb-0">
          <li className="list-inline-item"><Link to="privacy-policy.html">Privacy Policy</Link></li>
          <li className="list-inline-item"><Link to="terms-of-service.html">Terms of Use</Link></li>
        </ul>
      </div>
      <div className="col-lg-6 text-right">
        Copyright 2020 <Link to="#">CRV</Link> All Rights Reserved.
      </div>
    </div>
  </div>
</footer>

  )
}
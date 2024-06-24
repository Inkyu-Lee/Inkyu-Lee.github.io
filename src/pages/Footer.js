import React from 'react';
import './Foote.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Quick links</h6>
            <ul className="list-unstyled">
              <li><a href="/">홈</a></li>
              <li><a href="#/Gallery">갤러리</a></li>
              <li><a href="#/Resume">레쥬메</a></li>
              <li><a href="#/Project">프로젝트</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>SNS 연결</h6>
            <ul className="list-unstyled">
              <li><a href="https://github.com/Inkyu-Lee/" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + '/images/github-icon.png'} alt="instagram" className="img-fluid github-icon" /></a></li>
              <li><a href="http://velog.io/@dinodove/posts" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + '/images/velog-icon.png'} alt="velog" className="img-fluid velog-icon" /></a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <address>
              <strong>웹프로그래밍 수업 홈페이지</strong><br />
              React.js와 CSS로 제작<br />
              <abbr title="Telephone">T:</abbr><a href="TEL:+821097953662">010 9795 3662</a><br />
              <abbr title="Mail">Mail:</abbr><a href="mailto:info@domain.com">dinodove@icloud.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <ul className="list-inline">
              <li className="list-inline-item">&copy; In-kyuLee</li>
              <li className="list-inline-item">All rights reserved.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
  return (
    <div>
      <footer className="pt-4 pb-4 text-muted text-center d-print-none">
        <div className="container">
          <div className="my-3">
            <div className="h4">Kenrick Betah</div>
            <div className="footer-nav">
              <nav role="navigation">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://twitter.com/KenB180603"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter" />
                      <span className="menu-title sr-only">Twitter</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.facebook.com/Kenrick Betah"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook" />
                      <span className="menu-title sr-only">Facebook</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.instagram.com/betahkenrick"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram" />
                      <span className="menu-title sr-only">Instagram</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://github.com/KenrickBetah"
                      title="Github"
                    >
                      <i className="fab fa-github" />
                      <span className="menu-title sr-only">Github</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-small">
            <div className="mb-1">© Right Resume. All rights reserved.</div>
            <div>
              Design -{" "}
              <a href="https://templateflip.com/" target="_blank">
                TemplateFlip
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

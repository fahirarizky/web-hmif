import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <React.Fragment>

            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>HMIF</h3>
                                <p></p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Shortcut</h4>
                                <ul>
                                    <li><i className="ion-ios-arrow-right"></i> <a href="/#">Beranda</a></li>
                                    <li><i className="ion-ios-arrow-right"></i> <a href="#about">Tentang</a></li>
                                    <li><i className="ion-ios-arrow-right"></i> <a href="#services">Informasi</a></li>
                                    <li><i className="ion-ios-arrow-right"></i> <a href="/#portfolio">Kegiatan</a></li>
                                    <li><i className="ion-ios-arrow-right"></i> <a href="/#team">Pengurus</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Kontak</h4>
                                <p>
                                    Sekretariat HMIF <br/>
                                    Jalan Majapahit Nomor 62<br/>
                                    Mataram <br/>
                                    <strong>Nomor Telepon:</strong> +62 0000 1111 234<br/>
                                    <strong>Email:</strong> hmifftunram@gmail.com<br/>
                                </p>

                                <div className="social-links">
                                    <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="/#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="/#" className="instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="/#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                                    <a href="/#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Informasi Terbaru</h4>
                                <p>N/A</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>HMIF</strong>. All Rights Reserved
                    </div>
                    {/* <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div> */}
                </div>
            </footer>

            <a href="/#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>


        </React.Fragment>
    );
  }
}

export default Footer;
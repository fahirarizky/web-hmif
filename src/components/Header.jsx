import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <header id="header">
                <div className="container-fluid">
                    <div id="logo" className="pull-left">
                        <h1><a href="intro" className="scrollto"><img src="assets/img/Logo HMIF.png"></img>   HMIF</a></h1>
                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><a href="intro">Beranda</a></li>
                            <li><a href="about">Tentang</a></li>
                            <li><a href="services">Informasi</a></li>
                            <li><a href="portfolio">Kegiatan</a></li>
                            <li><a href="team">Pengurus</a></li>
                            <li><a href="contact">Kontak</a></li>
                            {/* <li className="menu-has-children"><a href="/#">Drop Down</a>
                                <ul>
                                    <li><a href="/#">Drop Down 1</a></li>
                                    <li><a href="/#">Drop Down 3</a></li>
                                    <li><a href="/#">Drop Down 4</a></li>
                                    <li><a href="/#">Drop Down 5</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    );
  }
}

export default Header;
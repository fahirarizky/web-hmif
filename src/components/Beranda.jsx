import React, { Component } from 'react';
import Tentang from './Tentang';
import Informasi from './Informasi';
import Kegiatan from './Kegiatan';
import Pengurus from './Pengurus';
import Kontak from './Kontak';


class Beranda extends Component {
  render() {
    return (
        <React.Fragment>

            <section id="intro">
                <div className="intro-container">
                    <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">

                        <ol className="carousel-indicators"></ol>

                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-item active">
                                <div className="carousel-background"><img src="assets/img/intro-carousel/8.jpg" alt=""></img></div>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2>SELAMAT DATANG DI WEBSITE HMIF</h2>
                                        <h3><b>HIMPUNAN MAHASISWA INFORMATIKA UNIVERSITAS MATARAM</b></h3>
                                        {/* <a href="#featured-services" className="btn-get-started scrollto">Get Started</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background"><img src="assets/img/intro-carousel/7.jpg" alt=""></img></div>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2>SELAMAT DATANG DI WEBSITE HMIF</h2>
                                        <h3><b>HIMPUNAN MAHASISWA INFORMATIKA UNIVERSITAS MATARAM</b></h3>
                                        {/* <a href="#featured-services" className="btn-get-started scrollto">Get Started</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background"><img src="assets/img/intro-carousel/6.jpg" alt=""></img></div>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2>SELAMAT DATANG DI WEBSITE HMIF</h2>
                                        <h3><b>HIMPUNAN MAHASISWA INFORMATIKA UNIVERSITAS MATARAM</b></h3>
                                        {/* <a href="#featured-services" className="btn-get-started scrollto">Get Started</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background"><img src="assets/img/intro-carousel/10.jpg" alt=""></img></div>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2>SELAMAT DATANG DI WEBSITE HMIF</h2>
                                        <h3><b>HIMPUNAN MAHASISWA INFORMATIKA UNIVERSITAS MATARAM</b></h3>
                                        {/* <a href="#featured-services" className="btn-get-started scrollto">Get Started</a> */}
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="carousel-background"><img src="assets/img/intro-carousel/9.jpg" alt=""></img></div>
                                <div className="carousel-container">
                                    <div className="carousel-content">
                                        <h2>SELAMAT DATANG DI WEBSITE HMIF</h2>
                                        <h3><b>HIMPUNAN MAHASISWA INFORMATIKA UNIVERSITAS MATARAM</b></h3>
                                        {/* <a href="#featured-services" className="btn-get-started scrollto">Get Started</a> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>
            </section>
            <Tentang/>
            <Informasi/>
            <Kegiatan/>
            <Pengurus/>
            <Kontak/>


        </React.Fragment>
    );
  }
}

export default Beranda;
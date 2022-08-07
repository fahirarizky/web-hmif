import React, { Component } from 'react';

class Tentang extends Component {
  render() {
    return (
        <React.Fragment>

            <main id="main">


                {/* <section id="featured-services">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 box">
                                <i className="ion-ios-bookmarks-outline"></i>
                                <h4 className="title"><a href="/#">Lorem Ipsum Delino</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div className="col-lg-4 box box-bg">
                                <i className="ion-ios-stopwatch-outline"></i>
                                <h4 className="title"><a href="/#">Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>

                            <div className="col-lg-4 box">
                                <i className="ion-ios-heart-outline"></i>
                                <h4 className="title"><a href="/#">Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>

                        </div>
                    </div>
                </section> */}

                <section id="about">
                    <div className="container">

                        <header className="section-header">
                            <h3>TENTANG HMIF</h3>
                            {/* <p>HIMPUNAN MAHASISWA INFORMATIKA</p> */}
                        </header>

                        <div className="row about-cols">

                            <div className="col-md-4 wow fadeInUp">
                                <div className="about-col">
                                    <div className="img">
                                        <img src="assets/img/about-mission.jpg" alt="" className="img-fluid"></img>
                                        <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                                    </div>
                                    <h2 className="title"><a href="/#">Visi</a></h2>
                                    <p>
                                        Mewujudkan Himpunan Mahasiswa Informatika (HMIF) sebagai wadah anggota untuk mengembangkan diri, baik dalam segi akademik maupun non akademik serta bersinergi baik internal maupun eksternal.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="about-col">
                                    <div className="img">
                                        <img src="assets/img/about-plan.jpg" alt="" className="img-fluid"></img>
                                        <div className="icon"><i className="ion-ios-list-outline"></i></div>
                                    </div>
                                    <h2 className="title"><a href="/#">Misi</a></h2>
                                    <p>
                                        1. Mewadahi, menimbang, dan memproses arpirasi dari anggota HMIF.
                                    </p>
                                    <p>
                                        2. Menjalin keharmonisan dan sinergisitas baik internal maupun eksternal.
                                    </p>
                                    <p>
                                       3. Menyelenggarakan dan melanjutkan kegiatan yang mendukung untuk anggota HMIF dapat mengembangkan diri.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="about-col">
                                    <div className="img">
                                        <img src="assets/img/about-vision.jpg" alt="" className="img-fluid"></img>
                                        <div className="icon"><i className="ion-ios-eye-outline"></i></div>
                                    </div>
                                    <h2 className="title"><a href="/#">Tujuan</a></h2>
                                    <p>
                                        Menjunjung Tinggi nama baik Himpunan Mahasiswa Informatika (HMIF) dan almamater Program Studi Informatika (PSTI) serta menjalankan Tri Dharma Perguruan Tinggi.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


            </main>


        </React.Fragment>
    );
  }
}

export default Tentang;
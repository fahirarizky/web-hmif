import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import Beranda from './components/Beranda';
import Tentang from './components/Tentang';
import Informasi from './components/Informasi';
import Kegiatan from './components/Kegiatan';
import Pengurus from './components/Pengurus';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import { BrowserRouter, NavLink, HashRouter, Route } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
    render(){
        return(         
            <BrowserRouter>
            <Fragment>
            <header id="header">
                <div className="container-fluid">
                     <div id="logo" className="pull-left">
                         <h1><a href="/" className="scrollto"><img src="assets/img/Logo HMIF.png"></img>   HMIF</a></h1>
                     </div>

                     <nav id="nav-menu-container">
                         <ul className="nav-menu">
                             <li><NavLink to="/">Beranda</NavLink></li>
                             <li><NavLink to="/Tentang">Tentang</NavLink></li>
                             <li><NavLink to="/Informasi">Informasi</NavLink></li>
                             <li><NavLink to="/Kegiatan">Kegiatan</NavLink></li>
                             <li><NavLink to="/Pengurus">Pengurus</NavLink></li>
                             <li><NavLink to="/Kontak">Kontak</NavLink></li>
                         </ul>
                     </nav>
                 </div>
             </header>



            <Route exact path="/" component={Beranda}/>
            <Route path="/Tentang" component={Tentang}/>
            <Route path="/Informasi" component={Informasi}/>
            <Route path="/Kegiatan" component={Kegiatan}/>
            <Route path="/Pengurus" component={Pengurus}/>
            <Route path="/Kontak" component={Kontak}/>
            
            <Footer/>
            </Fragment>
            </BrowserRouter>

            // <HashRouter>
                
               
            
            //  <header id="header">
            //     <div className="container-fluid">
            //         <div id="logo" className="pull-left">
            //             <h1><a href="#" className="scrollto"><img src="assets/img/Logo HMIF.png"></img>   HMIF</a></h1>
            //         </div>

            //         <nav id="nav-menu-container">
            //             <ul className="nav-menu">
            //                 <li><NavLink to="/">Beranda</NavLink></li>
            //                 <li><NavLink to="/Tentang">Tentang</NavLink></li>
            //                 <li><NavLink to="/Informasi">Informasi</NavLink></li>
            //                 <li><NavLink to="/Kegiatan">Kegiatan</NavLink></li>
            //                 <li><NavLink to="/Pengurus">Pengurus</NavLink></li>
            //                 <li><NavLink to="/Kontak">Kontak</NavLink></li>
            //             </ul>
            //         </nav>
            //     </div>
            // </header> 

                
            
            
            // <Route exact path="/" component={Beranda}/>
            // <Route path="/Tentang" component={Tentang}/>
            // <Route path="/Informasi" component={Informasi}/>
            // <Route path="/Kegiatan" component={Kegiatan}/>
            // <Route path="/Pengurus" component={Pengurus}/>
            // <Route path="/Kontak" component={Kontak}/>

            
            // <Footer/>
            // </HashRouter>
        )
    }
}

export default App;
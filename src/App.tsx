type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

import photo from "./assets/photo.JPG";
import photoAnchor from "./assets/PhotoAnchor.png";
import photoBunga from "./assets/photoBunga.jpg";
import photoGunung from "./assets/gunung.png";
import photo3D from "./assets/blender.png";
import panit1 from "./assets/panit1.jpg";
import panit2 from "./assets/panit2.jpg";
import panit3 from "./assets/panit3.jpg";
import logo1 from "./assets/linkedin.jpeg";
import logo2 from "./assets/ig.webp";

function App() {
  return (
    <div className="container">

      {/* <nav>
        <ul>
          <li><a href="#top">Profil</a></li>
          <li><a href="#Projek">Projek</a></li>
          <li><a href="#Hobi">Hobi</a></li>
          <li><a href="#Pengalaman-kepanitiaan">Pengalaman Kepanitiaan</a></li>
        </ul>
      </nav> */}

      <div id="top" className="top">
        <div className="photo">
          <img src={photo}></img>
        </div>
        <div className="Biodata">
          <h1>Keisha Sakura</h1>
          <p>Halo!! Perkenalkan aku Keisha Sakura Widjaja, biasa dipanggil Keisha. Saat ini aku sedang belajar di Institut Teknologi Bandung, lebih tepatnya di STEI-K, jurusan Sistem dan Teknologi Informasi. 
            Aku memiliki ketertarikan pada bidang Software Engineer, terutama di bagian front-end. Ketertarikanku berawal dari mata pelajaran TIK di SMA di mana aku mendapat materi HTML dan CSS. 
            Hal tersebut juga lah yang membuatku masuk jurusanku saat ini. Untuk saat ini pun, aku masih memiliki keinginan untuk berkarir dalam bidang di masa depan.</p>
          <div className="Kontak">
            <div className="socials">
              <a href="https://www.linkedin.com/in/keishasakura/" className="link1">
                <img src={logo1} className="logo" width="50" height="50"></img>
              </a>
              <a href="https://www.instagram.com/keishawi_/">
                <img src={logo2} className="logo" width="50" height="50"></img>
              </a>
            </div>
            <p>+62 895-3790-55810</p>
            <p>keishasakuraw0406@gmail.com</p>
          </div>
        </div>
      </div>

      <div id="Projek" className="Projek">
        <h1>PROJEK</h1>
        <img src={photoAnchor}></img>
        <div className="deskripsi">
          <p><strong>ANCHOR</strong> (<em>AI for Navigating Contract Harmonization, Optimization, & Risk</em>): Platform Strategis untuk Manajemen Siklus Hidup Kontrak yang Cerdas di PT ILCS</p>
          <p>by Back | Burner in Hackathon IFest 2025</p>
          <a target="_blank" className="btn" href="https://drive.google.com/file/d/1jYuzarftSF0-gmtTyLJ2fm7S1nZfG15-/view">Video Demo</a>
        </div>
      </div>

      <div id="Hobi" className="Hobi">
        <h1>HOBI</h1>
        <div className="hobi-list">
          <div className="hobi-item">
            <img src={photoBunga} />
            <h3>Merajut</h3>
          </div>
          <div className="hobi-item">
            <img src={photoGunung} />
            <h3>Bermain game</h3>
          </div>
          <div className="hobi-item">
            <img src={photo3D} />
            <h3>3D Design</h3>
          </div>
        </div>
      </div>

      <div id="Pengalaman-kepanitiaan" className="Pengalaman-kepanitiaan">
        <h1>Pengalaman Kepanitiaan</h1>
        <div className="panit-list">
          <div className="panit-item">
            <img src={panit2} />
            <h3>Staff Entrepreneurship, AMI 2025</h3>
          </div>
          <div className="panit-item">
            <img src={panit3} />
            <h3>Staff Dana Usaha, PPAB KMB ITB 2025</h3>
          </div>
          <div className="panit-item">
            <img src={panit1} />
            <h3>Staff Sponsorship, OSKM ITB 2025</h3>
          </div>
        </div>
      </div>


    </div>
    
  );
}

export default App;

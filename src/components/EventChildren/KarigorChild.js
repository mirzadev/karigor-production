import "./KarigorChildStyles.css";
import childrenIntro from "../Assets/Children/children-intro.jpg";
import childrenEpi1 from "../Assets/Children/child-perform-1.jpg";
import childrenEpi2 from "../Assets/Children/child-perform-2.jpg";
import childrenEpi3 from "../Assets/Children/child-perform-3.jpg";
import childrenEpi4 from "../Assets/Children/child-perform-4.jpg";
import childrenEpi5 from "../Assets/Children/child-perform-5.jpg";
import childrenEpi6 from "../Assets/Children/child-perform-6.jpg";
import childrenEpi7 from "../Assets/Children/child-perform-7.jpg";
import childrenEpi8 from "../Assets/Children/child-perform-8.jpg";
import childrenEpi9 from "../Assets/Children/child-perform-9.jpg";
import childrenEpi10 from "../Assets/Children/child-perform-10.jpg";
import childrenEpi11 from "../Assets/Children/child-perform-11.jpg";
import childrenEpi12 from "../Assets/Children/child-perform-12.jpg";
import childrenGallery1 from "../Assets/Children/children-1.jpg";
import childrenGallery2 from "../Assets/Children/children-2.jpg";
import childrenGallery3 from "../Assets/Children/children-3.jpg";
import childrenGallery4 from "../Assets/Children/children-4.jpg";
import childrenGallery5 from "../Assets/eventBoishakh/Adult-2019/adult-2019-Performance-1.jpg";
import childrenGallery6 from "../Assets/eventBoishakh/Adult-2019/adult-2019-Performance-2.jpg";
import childrenGallery7 from "../Assets/eventBoishakh/Adult-2019/adult-2019-Performance-3.jpg";
import childrenGallery8 from "../Assets/eventBoishakh/Adult-2019/adult-2019-Performance-4.jpg";
import childrenGallery9 from "../Assets/eventBoishakh/Adult-2019/audience-2019-1.jpg";
import childrenGallery10 from "../Assets/eventBoishakh/Adult-2019/audience-2019-2.jpg";
import childrenGallery11 from "../Assets/eventBoishakh/Adult-2019/audience-2019-3.jpg";
import childrenGallery12 from "../Assets/eventBoishakh/Adult-2019/audience-2019-4.jpg";

function KarigorChild() {
  return (
    <div>
      <h1 className="children-heading">Karigor Children Activities</h1>
      <p className="children-heading-expl">
        Future Leaders in Bangladesh Community
      </p>

      <div className="children-container">
        <div className="children-des">
          <div className="children-text">
            <div className="children-des-heading">
              <h3>Our Children</h3>
            </div>

            <p>
              Our childrens are the pride for we Bangladeshi. Many of them are
              born and brought up in Unites States. But none of them forgets
              their roots. These childrens are unique. The equally maintains two
              different cunture. Beside practicing the American culture, they
              equally upholds the origin, culture, religion and traditions of
              Bangladesh where their root belongs to. Most of the childrens are
              the best in their own class and after completing the education,
              the always glitters their light in their profession.
            </p>
            <p>
              Karigor is one of the lucky organization where all the parents in
              South Florida have their trust and confidence. Here childrens
              comes, learns and practices Bangladeshi culture from the very
              childhood of their life. Before any program, parents brings their
              childrens and get them involved in program. During these practice,
              Karigor always identifies the talents and guides them towards
              success. Karigor made lot of good singers, dancers who are
              currently adult and successful in their personal and professional
              life.
            </p>
          </div>

          <div className="children-intro-image">
            <a
              href="https://www.youtube.com/watch?v=b_BVF841OwY&t=1026s"
              target="_blank"
            >
              <img id="children-image" alt="image-vdo" src={childrenIntro} />
            </a>
          </div>
        </div>

        <div className="children-cart-heading">
          <h3>Children in Karigor</h3>
        </div>
        <div className="children-des-heading-gallery">
          <h4>Activity Gallery</h4>
        </div>
        <div className="children-event-gallery">
          <img alt="child-image" src={childrenGallery1} />
          <img alt="child-image" src={childrenGallery2} />
          <img alt="child-image" src={childrenGallery3} />
          <img alt="child-image" src={childrenGallery4} />
        </div>
        <div className="children-event-gallery">
          <img alt="children-image" src={childrenGallery5} />
          <img alt="children-image" src={childrenGallery6} />
          <img alt="children-image" src={childrenGallery7} />
          <img alt="children-image" src={childrenGallery8} />
        </div>
        <div className="children-event-gallery">
          <img alt="children-image" src={childrenGallery9} />
          <img alt="children-image" src={childrenGallery10} />
          <img alt="children-image" src={childrenGallery11} />
          <img alt="children-image" src={childrenGallery12} />
        </div>
        <div className="children-des-heading-gallery">
          <h4>Music Videos and Stage Shows</h4>
        </div>
        <div className="children-cart">
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=8TX_m79Q9ZA"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi1} alt="epi1" />
              </div>
              <h3>O Nodi Re</h3>
              <p>Tazri, Tahia, Amrita</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=-82RcEXYrMI"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi2} alt="epi2" />
              </div>
              <h3>Alal O Dulal</h3>
              <p>Ador Khan</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=XdK8G5c2hA4"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi3} alt="epi3" />
              </div>
              <h3>Kor Ki Na Kalo Ki</h3>
              <p>Joeeta and Devjyoti</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=U6G9Cv5YOi8"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi4} alt="epi4" />
              </div>
              <h3>Barir Manush Koy Amay </h3>
              <p>Sahira Uddin</p>
            </a>
          </div>
        </div>

        <div className="children-cart">
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=b_BVF841OwY&t=960s"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi5} alt="epi5" />
              </div>
              <h3>Victory Day 2016 in USA</h3>
              <p>Freedon Fighter Dr Sultan and Children</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=ZJ4yDoQhhUs"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi6} alt="epi6" />
              </div>
              <h3>Haire Amar Mon Matano Desh</h3>
              <p>Joyeeta Anis</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=qAsfUl9ML-U"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi7} alt="epi7" />
              </div>
              <h3>Bulbul Pakhi Moyna Tia</h3>
              <p>Manha - Muniba</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=LccRSRLDn3o"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi8} alt="epi8" />
              </div>
              <h3>Song - Paan</h3>
              <p>Joeeta Anis</p>
            </a>
          </div>
        </div>
        <div className="children-des-heading-gallery">
          <h4>Evening With Bristi</h4>
        </div>
        <div className="children-cart">
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=R3NTiELopvA"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi9} alt="epi9" />
              </div>
              <h3>Shirin Bristi</h3>
              <p>Evening With Bristi</p>
              <p>Episode-Introduction</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=5tQ6nmzSvao"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi10} alt="epi10" />
              </div>
              <h3>Saareen Junaid</h3>
              <p>Evening With Bristi</p>
              <p>Episode-1</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=RwL8CdXKFek"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi11} alt="epi11" />
              </div>
              <h3>Tasnia Arshi</h3>
              <p>Evening With Bristi</p>
              <p>Episode-2</p>
            </a>
          </div>
          <div className="children-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=Nwf60KkAn9A"
              target="_blank"
            >
              <div className="children-episode-image">
                <img src={childrenEpi12} alt="epi12" />
              </div>
              <h3>Purbasha Rahman</h3>
              <p>Evening With Bristi</p>
              <p>Episode-3</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KarigorChild;

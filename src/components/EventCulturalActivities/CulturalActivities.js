import "./CulturalActivitiesStyles.css";
import culturalIntro from "../Assets/kpCulture/kpCulture-Intro.jpg";
import culturalEpi1 from "../Assets/kpCulture/kpCultureEpic1.jpg";
import culturalEpi2 from "../Assets/kpCulture/kpCultureEpic2.jpg";
import culturalEpi3 from "../Assets/kpCulture/kpCultureEpic3.jpg";
import culturalEpi4 from "../Assets/kpCulture/kpCultureEpic4.jpg";
import culturalEpi5 from "../Assets/kpCulture/kpCultureEpic5.jpg";
import culturalEpi6 from "../Assets/kpCulture/kpCultureEpic6.jpg";
import culturalEpi7 from "../Assets/kpCulture/kpCultureEpic7.jpg";
import culturalEpi8 from "../Assets/kpCulture/kpCultureEpic8.jpg";
import culturalEpi9 from "../Assets/kpCulture/kpCultureEpic9.jpg";
import culturalEpi10 from "../Assets/kpCulture/kpCultureEpic10.jpg";
import culturalEpi11 from "../Assets/kpCulture/kpCultureEpic11.jpg";
import culturalEpi12 from "../Assets/kpCulture/kpCultureEpic12.jpg";
import culturalGallery1 from "../Assets/kpCulture/childrenGallery-1.jpg";
import culturalGallery2 from "../Assets/kpCulture/childrenGallery-2.jpg";
import culturalGallery3 from "../Assets/kpCulture/childrenGallery-3.jpg";
import culturalGallery4 from "../Assets/kpCulture/childrenGallery-4.jpg";
import culturalGallery5 from "../Assets/kpCulture/adultGallery-1.jpg";
import culturalGallery6 from "../Assets/kpCulture/adultGallery-2.jpg";
import culturalGallery7 from "../Assets/kpCulture/adultGallery-3.jpg";
import culturalGallery8 from "../Assets/kpCulture/adultGallery-4.jpg";
import culturalGallery9 from "../Assets/kpCulture/adultGallery-5.jpg";
import culturalGallery10 from "../Assets/kpCulture/adultGallery-6.jpg";
import culturalGallery11 from "../Assets/kpCulture/adultGallery-7.jpg";
import culturalGallery12 from "../Assets/kpCulture/adultGallery-8.jpg";

function CulturalActivities() {
  return (
    <div>
      <h1 className="cultural-heading">Karigor Cultural Activities</h1>
      <p className="cultural-heading-expl">
        Dedicated to Uphold the Bangladeshi Culture
      </p>

      <div className="cultural-container">
        <div className="cultural-des-heading">
          <h3>Background</h3>
        </div>
        <div className="cultural-des">
          <div className="cultural-text">
            <p>
              Karigor organizes different cultural events including Anando Mela,
              Drama, musical events or picnics. Each of these are very popular
              to the Bangladeshi community. Karigor has their own setup of
              talents who plans, creates and performs all kinds of cultural
              activities for themselves and for other organizations in Florida
              or other states. Karigor is one of the key performing organization
              in all major events in South Florida like FOBANA, Asian Food Food
              and Cultural Show. Karigor has the honor to create short films,
              drama, music videos etc using their own talents.
            </p>
            <p className="cultural-des-2">
              Karigor is an entity that is full of innovations in cultural
              arena. This is the unique organization where everyone works
              shoulder to shoulder to make any cultural event successful.
              Whatever cultural projects they are assigned with, they always
              starts from the scratch and make the finest delivery to the
              community. Karigor is the symbol of cuttural trust to Bangladeshi
              community.
            </p>
          </div>

          <div className="cultural-intro-image">
            <a
              href="https://www.youtube.com/watch?v=ZmV0-8DalbU&t=1217s"
              target="_blank"
            >
              <img id="cultural-image" alt="image-vdo" src={culturalIntro} />
            </a>
          </div>
        </div>

        <div className="cultural-cart-heading">
          <h3>Cultural Diversity of Karigor</h3>
        </div>
        <div className="cultural-des-heading-gallery">
          <h4>Activity Gallery</h4>
        </div>
        <div className="cultural-event-gallery">
          <img alt="child-image" src={culturalGallery1} />
          <img alt="child-image" src={culturalGallery2} />
          <img alt="child-image" src={culturalGallery3} />
          <img alt="child-image" src={culturalGallery4} />
        </div>
        <div className="cultural-event-gallery">
          <img alt="cultural-image" src={culturalGallery5} />
          <img alt="cultural-image" src={culturalGallery6} />
          <img alt="cultural-image" src={culturalGallery7} />
          <img alt="cultural-image" src={culturalGallery8} />
        </div>
        <div className="cultural-event-gallery">
          <img alt="cultural-image" src={culturalGallery9} />
          <img alt="cultural-image" src={culturalGallery10} />
          <img alt="cultural-image" src={culturalGallery11} />
          <img alt="cultural-image" src={culturalGallery12} />
        </div>
        <div className="cultural-des-heading-gallery">
          <h4>Karigor Drama</h4>
        </div>
        <div className="cultural-cart">
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=5ipLdKz-w_8&t=21s"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi1} alt="epi1" />
              </div>
              <h3>Eid Drama - Foreign Life</h3>
              <p>Arnab, Joeta, Kakoli Chowdhury, Anik</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=J9LcGrZPQQM"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi2} alt="epi2" />
              </div>
              <h3>Comedy Drama - Dil Fasta Fry</h3>
              <p>Iffat, Nandini, Shaheen Chowdhury</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=ltBUAQ6nK1g&t=169s"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi3} alt="epi3" />
              </div>
              <h3>Drama - Onir Golpo</h3>
              <p>Samia Rahman, Joeta</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=Z39aF6LxXoo"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi4} alt="epi4" />
              </div>
              <h3>Eid Drama - Jatra Bhongo</h3>
              <p>Tipu, Anik, Rony, Rima, </p>
            </a>
          </div>
        </div>
        <div className="cultural-des-heading-gallery">
          <h4>Music Videos and Stage Shows</h4>
        </div>
        <div className="cultural-cart">
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=zSgbKiZifzE"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi5} alt="epi5" />
              </div>
              <h3>Music VDO - Nizamuddin Auliya</h3>
              <p>Mofazzol Hoque Rony</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=PuGhsshZDgM"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi6} alt="epi6" />
              </div>
              <h3>Baul Song - Loka Bola O Bola Re, Ghor Bari Bana Na Amar</h3>
              <p>Devjyoti Sen</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=6YMTzwbMqS8"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi7} alt="epi7" />
              </div>
              <h3>Baul Song - Kamone Bhulibo Ami</h3>
              <p>Mofazzol Hoque Rony</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=lLUUvOCm36M"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi8} alt="epi8" />
              </div>
              <h3>Eid Song - O mor Ramjaner Oe Rojer Sesha Alo Khushir Eid</h3>
              <p>Karigor Team</p>
            </a>
          </div>
        </div>
        <div className="cultural-cart">
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=syv6DNGrcQk"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi9} alt="epi9" />
              </div>
              <h3>Music VDO - Aso He Boishakh Asho Asho.</h3>
              <p>Team Karigor</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=JYwCk_N1Cjg"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi10} alt="epi10" />
              </div>
              <h3>FOBANA-2017 - Dhono Dhanna Pushpa Bhora</h3>
              <p>Karigor with Bangladesh Assocition of Florida</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=yb8xdZ-AgIc"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi11} alt="epi11" />
              </div>
              <h3>Eid Anondo Mela - Da Da Pal Tula Da</h3>
              <p>Karigor Team</p>
            </a>
          </div>
          <div className="cultural-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=kkPlvzk62hE"
              target="_blank"
            >
              <div className="cultural-episode-image">
                <img src={culturalEpi12} alt="epi12" />
              </div>
              <h3>Victory Day - Bangladesh - Kon Desha te Toru lata</h3>
              <p>Karigor Members</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CulturalActivities;

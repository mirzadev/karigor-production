import "./KpNewsStyles.css";
import kpNewsIntro from "../Assets/kpNews/kpNews-Intro.jpg";
import kpNewsEpi1 from "../Assets/kpNews/kpNews-1.jpg";
import kpNewsEpi2 from "../Assets/kpNews/kpNews-2.jpg";
import kpNewsEpi3 from "../Assets/kpNews/kpNews-3.jpg";
import kpNewsEpi4 from "../Assets/kpNews/kpNews-4.jpg";

function KarigorNews() {
  return (
    <div>
      <h1 className="kpNews-heading">Karigor News</h1>
      <p className="kpNews-heading-expl">
        Always Update With Bangladeshi Community
      </p>
      <div className="kpNews-container">
        <div className="kpNews-des">
          <div>
            <div className="kpNews-des-heading">
              <h3>Introduction</h3>
            </div>
            <div className="kpNews-intro">
              <div className="kpNews-intro-image">
                <a
                  href="https://www.youtube.com/watch?v=LLKMHW4T9p8&t=77s"
                  target="_blank"
                >
                  <img id="kpNews-image" alt="image-vdo" src={kpNewsIntro} />
                </a>
              </div>
              <div className="kpNews-text">
                <p>
                  Karigor News is one of the great addition to Karigor community
                  work. Karigor heroes are always very active to collect all
                  kinds of information that affects Bangladesh community,
                  whether it is in Florida or outside Florida. Our dedicated
                  team members always gets updated information from our reliable
                  sources and presents before the community. Upon receiving any
                  information our Karigor always verifies through another source
                  and then only telecasts to the public.
                </p>
                <p>
                  The process of telecasting is completely done by the Karigor
                  members. Instead of outsourcing the hands from third party,
                  Karigor manages the whole process by themselves. Karigor has
                  own dedicated studio where all these works are done and these
                  are all volunteer service, The qualified individuals works
                  volunterily and complete any news project. Therefore, our news
                  events are not live and these takes place once there are some
                  incidents or informations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="kpNews-cart-heading">
          <h3>Karigor Important News</h3>
        </div>
        <div className="kpNews-cart">
          <div className="kpNews-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=uA2Zw5nW7HM&t=154s"
              target="_blank"
            >
              <div className="kpNews-episode-image">
                <img src={kpNewsEpi1} alt="epi1A" />
              </div>
              <h3>Lira Rahman</h3>
              <p>Episode - 1</p>
            </a>
          </div>
          <div className="kpNews-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=LLKMHW4T9p8&t=77s"
              target="_blank"
            >
              <div className="kpNews-episode-image">
                <img src={kpNewsEpi2} alt="epi1A" />
              </div>
              <h3>J Alam Tipu</h3>
              <p>Episode - 2</p>
            </a>
          </div>
          <div className="kpNews-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=zgLNlyEWRMM&t=102s"
              target="_blank"
            >
              <div className="kpNews-episode-image">
                <img src={kpNewsEpi3} alt="epi1A" />
              </div>
              <h3>Nandini Bhowmik</h3>
              <p>Episode - 3</p>
            </a>
          </div>
          <div className="kpNews-episode">
            <a
              className="episode-link"
              href="https://www.youtube.com/watch?v=3BkF96btnOI&t=266s"
              target="_blank"
            >
              <div className="kpNews-episode-image">
                <img src={kpNewsEpi4} alt="epi1A" />
              </div>
              <h3>Lira Rahman</h3>
              <p>Episode - 4 </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KarigorNews;

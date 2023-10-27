import "./AboutUsStyles.css";
import karigorVision from "../Assets/Karigor-8.jpg";
import karigorObjectives from "../Assets/aboutPage/karigorObjective.jpg";
import CEO_Karigor from "../Assets/aboutPage/AdultMembers/TahmidaZaman.jpg";
import MD_Karigor from "../Assets/aboutPage/AdultMembers/MofazzalHaqueRony.jpg";
import COO_Karigor from "../Assets/aboutPage/AdultMembers/AnikDev.jpg";
import CFTO_Karigor from "../Assets/aboutPage/AdultMembers/MirzaAbdulAwal.jpg";
import SrDir_Karigor_1 from "../Assets/aboutPage/AdultMembers/RameshKunda.jpg";
import SrDir_Programs_Karigor from "../Assets/aboutPage/AdultMembers/JAlamTipu.jpg";
import Dir_Prog_Con_Karigor from "../Assets/aboutPage/AdultMembers/DevjyotiSen.jpg";
import Dir_Karigor_1 from "../Assets/aboutPage/AdultMembers/Shaikh.jpg";
import Dir_Karigor_2 from "../Assets/aboutPage/AdultMembers/RashedKalam.jpg";
import Dir_Karigor_4 from "../Assets/aboutPage/AdultMembers/NadiraAkter.jpg";
import Dir_Karigor_5 from "../Assets/aboutPage/AdultMembers/AbdullahRipon.jpg";
import Exe_Dir_Karigor_Cultural_1 from "../Assets/aboutPage/AdultMembers/RozinaKhan.jpg";
import Exe_Dir_Karigor_Cultural_2 from "../Assets/aboutPage/AdultMembers/NandiniBhowmik.jpg";
import Exe_Dir_Karigor_Cultural_3 from "../Assets/aboutPage/AdultMembers/PavitraJaswal.jpg";
import Exe_Dir_Karigor_Cultural_4 from "../Assets/aboutPage/AdultMembers/IffathAhnaf.jpg";
import Member_Karigor_Cultural_1 from "../Assets/aboutPage/AdultMembers/DevjaneeSen.jpg";
import Member_Karigor_Cultural_2 from "../Assets/aboutPage/AdultMembers/LiraRahmanShuman.jpg";
import Member_Karigor_Cultural_3 from "../Assets/aboutPage/AdultMembers/MdRocky.jpg";
import Member_Karigor_Cultural_4 from "../Assets/aboutPage/AdultMembers/Mim.jpg";
import Member_Karigor_Cultural_5 from "../Assets/aboutPage/AdultMembers/SharifTuhinAyeshaPutul.jpg";
import Member_Karigor_Cultural_6 from "../Assets/aboutPage/AdultMembers/KhurshidKhan.jpg";
import Member_Karigor_Cultural_7 from "../Assets/aboutPage/AdultMembers/IsmatSaminRashjitKhan.jpg";
import Member_Karigor_Cultural_8 from "../Assets/aboutPage/AdultMembers/ThaminaKarimEhsanulKarim.jpg";
import Member_Karigor_Cultural_9 from "../Assets/aboutPage/AdultMembers/MafiaRahman.jpg";
import Member_Karigor_Cultural_10 from "../Assets/aboutPage/AdultMembers/RumelSiddique.jpg";
import Member_Karigor_Cultural_11 from "../Assets/aboutPage/AdultMembers/RobinBari.jpg";
import Member_Karigor_Cultural_12 from "../Assets/aboutPage/AdultMembers/SamiaRahmanImtiazBabu.jpg";
import Member_Karigor_Cultural_13 from "../Assets/aboutPage/AdultMembers/SoniaRanjit.jpg";
import Member_Karigor_Cultural_14 from "../Assets/aboutPage/AdultMembers/AshadulHoque.jpg";
import Member_Karigor_Cultural_15 from "../Assets/aboutPage/AdultMembers/SakibShourav.jpg";
import Member_Karigor_Cultural_16 from "../Assets/aboutPage/AdultMembers/SharifMajumder.jpg";
import Member_Karigor_Cultural_17 from "../Assets/aboutPage/AdultMembers/SandhaMurshid.jpg";
import Member_Karigor_Cultural_18 from "../Assets/aboutPage/AdultMembers/SajidulKhan.jpg";
import Child_Member_Karigor_1 from "../Assets/aboutPage/ChildMembers/JoyeetaAnis.jpg";
import Child_Member_Karigor_2 from "../Assets/aboutPage/ChildMembers/AdrivAnis.jpg";
import Child_Member_Karigor_3 from "../Assets/aboutPage/ChildMembers/MunibaTahlil.jpg";
import Child_Member_Karigor_4 from "../Assets/aboutPage/ChildMembers/ManhaTahbil.jpg";
import Child_Member_Karigor_5 from "../Assets/aboutPage/ChildMembers/MahinIslam.jpg";
import Child_Member_Karigor_6 from "../Assets/aboutPage/ChildMembers/MounotaIslam.jpg";
import Child_Member_Karigor_7 from "../Assets/aboutPage/ChildMembers/RaeesaUddin.jpg";
import Child_Member_Karigor_8 from "../Assets/aboutPage/ChildMembers/AfraKarim.jpg";
import Child_Member_Karigor_9 from "../Assets/aboutPage/ChildMembers/AskfanKhan.jpg";
import Child_Member_Karigor_10 from "../Assets/aboutPage/ChildMembers/SalyoniAfraKhan.jpg";
import Child_Member_Karigor_11 from "../Assets/aboutPage/ChildMembers/AayanGhazi.jpg";
import Child_Member_Karigor_12 from "../Assets/aboutPage/ChildMembers/RabiaAnisha.jpg";
import Child_Member_Karigor_13 from "../Assets/aboutPage/ChildMembers/CyrusBari.jpg";
import Child_Member_Karigor_14 from "../Assets/aboutPage/ChildMembers/CenicaBari.jpg";
import Child_Member_Karigor_15 from "../Assets/aboutPage/ChildMembers/ShufratTahia.jpg";
import Child_Member_Karigor_16 from "../Assets/aboutPage/ChildMembers/SreyashDey.jpg";
import Child_Member_Karigor_17 from "../Assets/aboutPage/ChildMembers/ShourinDey.jpg";
import Adviser_Karigor_1 from "../Assets/aboutPage/Advisors/AtiqurRahman.jpg";
import Adviser_Karigor_2 from "../Assets/aboutPage/Advisors/JunaidAkter.jpg";
import Adviser_Karigor_3 from "../Assets/aboutPage/Advisors/TamannaAhmed.jpg";
import Adviser_Karigor_4 from "../Assets/aboutPage/Advisors/EhsanulKarim.jpg";
import Adviser_Karigor_5 from "../Assets/aboutPage/Advisors/MulsaryKhanum.jpg";
import Adviser_Karigor_6 from "../Assets/aboutPage/Advisors/SultanSalahuddinAhmed.jpg";
import Adviser_Karigor_7 from "../Assets/aboutPage/Advisors/ArcPrince.jpg";
import Adviser_Karigor_8 from "../Assets/aboutPage/Advisors/KeyaRozario.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="vision-des">
        <div className="vision-image">
          <img alt="img" src={karigorVision} />
        </div>
        <div className="vision-text">
          <h2>Karigor Vision</h2>
          <p>
            Karigor Production is a reputed organization in south Florida. Their
            journey started with the aim to continue practicing and also
            injecting the rich Bangladeshi culture among the community including
            the children. Bangladesh is a country that is full of cultural
            heritages where most of the districts has their own culture and
            specialty. Therefore, Karigor's vision is to implement all these
            gradually irrespective of race, region and religious differences.
            Within ten years of inception, Karigor should have a strong
            structure and credibility in society. In the next twenty years they
            will gradually add different cultural heritage into their practices.
            Importance will be given on Childrens by proper motivation and
            involvement in all kinds of religious, festival, cultural, language
            and education activities.
          </p>
        </div>
      </div>
      <div className="objective-des">
        <div className="objective-text">
          <h2>Karigor Objectives</h2>
          <p>
            <ul className="objective-list">
              <li>
                To practice Bangladeshi culture in USA keeping full respect on
                American culture and pride.
              </li>
              <li>
                Train our future generation in developing Bengali culture side
                by side American culture.
              </li>
              <li>
                Follow all kinds of Federal, State, County and City rules in
                Karigor administration.
              </li>
              <li>
                Maintain very good relationships with all other organizations in
                Florida and the USA.
              </li>
              <li>
                Organize cultural shows on all nationally recognized events
                maintaining the cultural heritage of Bangladesh.
              </li>
            </ul>
          </p>
        </div>
        <div className="objective-image">
          <img alt="img" src={karigorObjectives} />
        </div>
      </div>

      <div>
        <h1 className="members-heading">Karigor Family</h1>
        <p className="members-heading-subTitle">
          Ambassadors of Bangladeshi Culture in South Florida
        </p>
      </div>
      <div className="kp-members-heading-gallery">
        <h4>Karigor Members</h4>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={CEO_Karigor} alt="member1" />
          </div>
          <h3>Tahmida Zaman Anis</h3>
          <p>Chief Executive Officer</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={MD_Karigor} alt="member1" />
          </div>
          <h3>Mofazzol Hoque Rony</h3>
          <p>Managing Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={COO_Karigor} alt="member1" />
          </div>
          <h3>Debashis Sarker Anik</h3>
          <p>Chief Operation Officer</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={CFTO_Karigor} alt="member1" />
          </div>
          <h3>Mirza Abdul Awal</h3>
          <p>Chief Finance & Technology Officer</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={SrDir_Karigor_1} alt="member1" />
          </div>
          <h3>Ramesh Kunda</h3>
          <p>Senior Director</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={SrDir_Programs_Karigor} alt="member1" />
          </div>
          <h3>Mohammed Jahangir Alam Tipu</h3>
          <p>Senior Director - Programs</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Dir_Prog_Con_Karigor} alt="member1" />
          </div>
          <h3>Devjyoti Sen</h3>
          <p>Director - Program Control</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Dir_Karigor_1} alt="member1" />
          </div>
          <h3>Shaik Omar Abdullah</h3>
          <p>Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Dir_Karigor_2} alt="member1" />
          </div>
          <h3>Rashed Kalam</h3>
          <p>Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Dir_Karigor_4} alt="member1" />
          </div>
          <h3>Nadira Akter</h3>
          <p>Director</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Dir_Karigor_5} alt="member1" />
          </div>
          <h3>Abdullah Ripon</h3>
          <p>Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Exe_Dir_Karigor_Cultural_1} alt="member1" />
          </div>
          <h3>Rozina Karim Khan</h3>
          <p>Executive Director - Cultural</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Exe_Dir_Karigor_Cultural_2} alt="member1" />
          </div>
          <h3>Nandini Bhowmik - Cultural & Finance</h3>
          <p>Executive Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Exe_Dir_Karigor_Cultural_3} alt="member1" />
          </div>
          <h3>Pavitra Jaswal Sen</h3>
          <p>Executive Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Exe_Dir_Karigor_Cultural_4} alt="member1" />
          </div>
          <h3>Iffat Ahnuf Lucky</h3>
          <p>Executive Director</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_1} alt="member1" />
          </div>
          <h3>Devjanee Sen</h3>
          <p>Executive Director</p>
        </div>

        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_3} alt="member1" />
          </div>
          <h3>Mr Rocky</h3>
          <p>Executive Director</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_4} alt="member1" />
          </div>
          <h3>Sanjida Mim</h3>
          <p>Executive Director</p>
        </div>
      </div>
      <div className="kp-members-heading-gallery">
        <h4>Families Makes Karigor Proud</h4>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_8} alt="member1" />
          </div>
          <h3>Thamina Karim & Ehsanul Karim</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_2} alt="member1" />
          </div>
          <h3>Lira Rahman & Shumon Rahman</h3>
          <p>Family</p>
        </div>

        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_5} alt="member1" />
          </div>
          <h3>Sharif Tuhin & Ayasha Putul</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_6} alt="member1" />
          </div>
          <h3>Khurshid Khan & Ghazi Azad</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_7} alt="member1" />
          </div>
          <h3>Ismat Samin & Rashjit Khan</h3>
          <p>Family</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_9} alt="member1" />
          </div>
          <h3>Mafia Rahman & Md Shahjahan</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_10} alt="member1" />
          </div>
          <h3>Shahana Baby & Rumel Siddique</h3>
          <p>Family</p>
        </div>

        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_11} alt="member1" />
          </div>
          <h3>Mili Bari & Robin Bari</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_12} alt="member1" />
          </div>
          <h3>Samia Rahman & Imtiaz Babu</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_13} alt="member1" />
          </div>
          <h3>Sonia Dey & Ranjit Dey</h3>
          <p>Family</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_14} alt="member1" />
          </div>
          <h3>Ashadul Haque & Mohsina Haque</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_15} alt="member1" />
          </div>
          <h3>Sakib M Shourav </h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_16} alt="member1" />
          </div>
          <h3>Sharif Majumder & Family</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_17} alt="member1" />
          </div>
          <h3>Shanda Murshid</h3>
          <p>Family</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Member_Karigor_Cultural_18} alt="member1" />
          </div>
          <h3>Sajidul Islam Khan (Shawon)</h3>
          <p>Family</p>
        </div>
      </div>

      <div className="kp-members-heading-gallery">
        <h4>Youth Members</h4>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_1} alt="member1" />
          </div>
          <h3>Joeeta Anis</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_2} alt="member1" />
          </div>
          <h3>Adreev Anis</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_3} alt="member1" />
          </div>
          <h3>Muniba Tahlil</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_4} alt="member1" />
          </div>
          <h3>Manha Tahlil</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_5} alt="member1" />
          </div>
          <h3>Mahin Islam</h3>
          <p>Member</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_6} alt="member1" />
          </div>
          <h3>Mounota Islam</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_7} alt="member1" />
          </div>
          <h3>Raeesa Uddin</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_8} alt="member1" />
          </div>
          <h3>Afra Karim</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_9} alt="member1" />
          </div>
          <h3>Ashfan Khan</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_10} alt="member1" />
          </div>
          <h3>Saiyoni Afra Khan</h3>
          <p>Member</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_11} alt="member1" />
          </div>
          <h3>Aayan Gazi</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_12} alt="member1" />
          </div>
          <h3>Rabiya Anisha</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_13} alt="member1" />
          </div>
          <h3>Cyrus Bari</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_14} alt="member1" />
          </div>
          <h3>Cenica Bari</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_15} alt="member1" />
          </div>
          <h3>Shufrat Tahia</h3>
          <p>Member</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_16} alt="member1" />
          </div>
          <h3>Sreyash Dey</h3>
          <p>Member</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Child_Member_Karigor_17} alt="member1" />
          </div>
          <h3>Shourin Dey</h3>
          <p>Member</p>
        </div>
      </div>
      <div className="kp-members-heading-gallery">
        <h4>Respected Advisory Board Members</h4>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_1} alt="member1" />
          </div>
          <h3>Mr. Atiqur Rahman</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_2} alt="member1" />
          </div>
          <h3>Mr. Junaid Akter</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_3} alt="member1" />
          </div>
          <h3>Tamanna Ahmed</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_4} alt="member1" />
          </div>
          <h3>Dr Ehsanul Karim, MD</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_5} alt="member1" />
          </div>
          <h3>Mulsary Khanum</h3>
          <p>Advisor</p>
        </div>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_6} alt="member1" />
          </div>
          <h3>Dr Sultan Salahuddin Ahmed, MD</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_7} alt="member1" />
          </div>
          <h3>Dr. Abdur Rob Khan Prince, MD</h3>
          <p>Advisor</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Adviser_Karigor_8} alt="member1" />
          </div>
          <h3>Catherina Keya Rozario</h3>
          <p>Advisor</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

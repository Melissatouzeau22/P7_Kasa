import Banner from "../../components/Banner/Banner";
import Data from "../../data/about.json";
import Collapse from "../../components/Collapse/Collapse";
import aboutBackground from "../../assets/about_background.png";
import "../About/About.css";

function About() {
  document.title = "Kasa - A propos de nous";
  return (
    <div className="about_main">
      <Banner img={aboutBackground} />
      <main className="about_display">
        {Data.map((item, index) => {
          return (
            <div key={index} className="collapse_display">
              <Collapse title={item.title}>{item.text}</Collapse>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default About;

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import "../../pages/Homepage/Homepage.css";
import backgroundimage from "../../assets/home_bg_banner.png";

function Homepage() {
  document.title = "Kasa - Accueil";
  return (
    <main className="display_home">
      <Banner
        img={backgroundimage}
        text1="Chez vous,"
        text2="partout et ailleurs"
      />
      <div className="display_card">
        {logements.map((item) => {
          return <Card key={item.id} logement={item}></Card>;
        })}
      </div>
    </main>
  );
}
export default Homepage;

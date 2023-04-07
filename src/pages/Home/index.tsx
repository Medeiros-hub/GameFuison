import React from "react";
import Navbar from "../../components/Navbar";
import "./index.sass";
import Card from "../../components/Card";
import GameBar from "../../components/GameBar";

import image01 from "../../assets/img/Games/Action/image 1.png";
import image02 from "../../assets/img/Games/Action/image 2.png";
import image03 from "../../assets/img/Games/Action/image 3.png";
import image04 from "../../assets/img/Games/Action/image 4.png";
import image05 from "../../assets/img/Games/Action/image 5.png";
import image06 from "../../assets/img/Games/Action/image 6.png";
import image07 from "../../assets/img/Games/Adventure/image 7.png";
import image08 from "../../assets/img/Games/Adventure/image 8.png";
import image09 from "../../assets/img/Games/Adventure/image 9.png";
import image10 from "../../assets/img/Games/Adventure/image 10.png";
import image11 from "../../assets/img/Games/Adventure/image 11.png";
import image12 from "../../assets/img/Games/Adventure/image 12.png";

type Game = {
  gameName: string
  gameImage: string
}

const Home: React.FC = () => {

  const actionGames: Game[] = [
    { gameName: "League of Legends", gameImage: image01 },
    { gameName: "Apex Legends", gameImage: image02 },
    { gameName: "Counter Strike", gameImage: image03 },
    { gameName: "World of Warcraft", gameImage: image04 },
    { gameName: "Dota 2", gameImage: image05 },
    { gameName: "Fortnite", gameImage: image06 },
  ];

  const adventureGames: Game[] = [
    { gameName: "Valorant", gameImage: image07 },
    { gameName: "PUBG", gameImage: image08 },
    { gameName: "Roblox", gameImage: image09 },
    { gameName: "GTA V", gameImage: image10 },
    { gameName: "Minecraft", gameImage: image11 },
    { gameName: "The Forest", gameImage: image12 },
  ]

  return (
    <>
      <Navbar />
      <section className="home-container">
        <div>
          <h1 className="title">
            Procure seu <span className="rainbow">duo</span> aqui
          </h1>
        </div>
        <GameBar sectionTitle="Ação"> 
          {actionGames.map((game) => (
            <Card 
              key={game.gameName} 
              gameName={game.gameName} 
              gameImage={game.gameImage}
            />
          ))}
        </GameBar>
        <GameBar sectionTitle="Aventura"> 
          {adventureGames.map((game) => (
            <Card 
              key={game.gameName} 
              gameName={game.gameName} 
              gameImage={game.gameImage}
            />
          ))}
        </GameBar>
      </section>
    </>
  );
};

export default Home;

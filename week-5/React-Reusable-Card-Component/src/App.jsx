import { useState } from "react";
import "./App.css";

// Importing Components
import Card from "./components/Card";
import CreateUserCard from "./components/CreateUserCard";

function App() {
  const [userCards, setUserCards] = useState([]);

  return (
    <div>
      <CreateUserCard userCards={userCards} setUserCards={setUserCards}></CreateUserCard>
      {/* Rendering the cards for each user inside the 'userCards' object */}
      <div className="outerDiv">
        {userCards.map((data) => {
          return <Card name={data.name} description={data.description} interests={data.interests} links={data.links}></Card>
        })}
        {/* <Card
          name={"Sidharth Kumar"}
          description={"I just dont know this is description"}
          interests={["Idk Bro", "Could be Something else", "Again IDK bro"]}
          links={{
            twitter: "https://www.google.com/maps",
            linkedIn: "linkedin.com",
          }}
        ></Card>
        <Card
          name={"Sidharth Kumar"}
          description={"I just dont know this is description"}
          interests={["Idk Bro", "Could be Something else", "Again IDK bro"]}
          links={{
            twitter: "https://www.google.com/maps",
            linkedIn: "linkedin.com",
          }}
        ></Card>
        <Card
          name={"Sidharth Kumar"}
          description={"I just dont know this is description"}
          interests={["Idk Bro", "Could be Something else", "Again IDK bro"]}
          links={{
            twitter: "https://www.google.com/maps",
            linkedIn: "linkedin.com",
          }}
        ></Card>
        <Card
          name={"Sidharth Kumar"}
          description={"I just dont know this is description"}
          interests={["Idk Bro", "Could be Something else", "Again IDK bro"]}
          links={{
            twitter: "https://www.google.com/maps",
            linkedIn: "linkedin.com",
          }}
        ></Card> */}
      </div>
    </div>
  );
}

export default App;

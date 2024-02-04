import "../App.css";

function Card({ name, description, interests, links }) {
  return (
    <div>
      <div className="cardBox">
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>Interests</h2>
        {/* <p>Idk Bro</p>
                <p>Could be something else</p>
                <p>Again idk</p> */}
        {interests.map((data) => {
          return (
            <div key={data}>
              <p>{data}</p>
            </div>
          );
        })}
        <a href={links.twitter} target="_blank">LinkedIn</a>
        <a href={links.linkedIn} target="_blank">Twitter</a>
      </div>
    </div>
  );
}

export default Card;

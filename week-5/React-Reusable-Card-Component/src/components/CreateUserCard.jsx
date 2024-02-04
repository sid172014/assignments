import { useState } from "react";
import "../App.css";

function CreateUserCard({ userCards, setUserCards }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([]);
  const [links, setLinks] = useState({});

  // For rendering the 'input' elements for the hobbies section
  const [inputRenders, setInputRenders] = useState([
    <input
      type="text"
      placeholder="hobbies"
      required
      onBlur={(e) => {
        setInterests((prevInterets) => {
          const newInterets = [...prevInterets, e.target.value];
          return newInterets;
        });
      }}
    ></input>,
  ]);

  const addHobbies = () => {
    setInputRenders((prevArrays) => {

        const newArray = [
          ...prevArrays,
          <input
            type="text"
            placeholder="hobbies"
            required
            onBlur={(e) => {
              setInterests((prevInterets) => {
                const newInterets = [...prevInterets, e.target.value];
                return newInterets;
              });
            }}
          ></input>,
        ];

      return newArray;
    });
  };

  const addCard = () => {
    setUserCards((prevCards) => {
      const updatedCards = [
        ...prevCards,
        { name, description, interests, links },
      ];
      console.log(updatedCards);
      return updatedCards;
    });

    // Resetting the initial values of the states
    setInputRenders([
        <input
        type="text"
        placeholder="hobbies"
        required
        onBlur={(e) => {
          setInterests(() => {
            const newInterets = [e.target.value];
            return newInterets;
          });
        }}
      ></input>
    ]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="description"
        required
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      {inputRenders}
      <button onClick={addHobbies}>+</button>
      <input
        type="text"
        placeholder="LinkedIn Link"
        onBlur={(e) => {
          setLinks((prev) => {
            const newObject = { ...prev, linkedIn: e.target.value };
            return newObject;
          });
        }}
      ></input>
      <input
        type="text"
        placeholder="Twitter Link"
        onBlur={(e) => {
          setLinks((prev) => {
            const newObject = { ...prev, twitter: e.target.value };
            return newObject;
          });
        }}
      ></input>
      <button onClick={addCard}>Create Card</button>
    </div>
  );
}

export default CreateUserCard;

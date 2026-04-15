import { useState, useEffect } from 'react';
import Lorem from "../parts/Lorem";
import HeroImage from "../parts/HeroImage";

PetsAndOwners.route = {
  path: '/pets-and-owners',
  label: 'Pets & owners',
  index: 3
};

export default function PetsAndOwners() {

  const [pets, setPets] = useState();

  useEffect(() => {
    (async () => {
      // fetch data from the url /json/pets.json
      const response = await fetch('/json/pets.json');
      // deserialize/unpack the json from to an array of objects
      const data = await response.json();
      // update the state variable pets
      setPets(data);
    })();
  }, []);

  console.log(pets);

  //id,name,species,ownerId
  return pets && <>
    <HeroImage
      src="dog-and-owner.webp"
      alt="A dog and its owner"
      heading="Pets & owners"
    />
    <h3>Pets</h3>
    <section className="pets">
      {pets.map(({ id, name, species }) => <div key={id}>
        <h4>{name}</h4>
        <p>{name} is a {species}.</p>
      </div>)}
    </section>
  </>;
}
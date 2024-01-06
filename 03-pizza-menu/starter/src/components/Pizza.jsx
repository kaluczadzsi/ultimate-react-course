/* eslint-disable react/prop-types */
const Pizza = ({ name, ingredients, photoName, price }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;

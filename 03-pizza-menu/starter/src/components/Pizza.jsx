/* eslint-disable react/prop-types */
const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? `Sold out` : price}</span>
      </div>
    </div>
  );
};

export default Pizza;

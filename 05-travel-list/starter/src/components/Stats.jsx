/* eslint-disable react/prop-types */
const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list</em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything ready to go 🚀'
          : `You have ${numItems} items on list, and you already packed ${percentage}%`}
      </em>
    </footer>
  );
};

export default Stats;

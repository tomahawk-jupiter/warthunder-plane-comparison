import React from "react";

const battleRatings = [
  "All",
  1.0,
  1.3,
  1.7,
  2.0,
  2.3,
  2.7,
  3.0,
  3.3,
  3.7,
  4.0,
  4.3,
  4.7,
  5.0,
  5.3,
  5.7,
  6.0,
  6.3,
  6.7,
  7.0,
  7.3,
  7.7,
  8.0,
  8.3,
  8.7,
  9.0,
  9.3,
  9.7,
  10.0,
  10.3,
];

const BattleRatingSelect = ({ battleRatingFilter, setBattleRatingFilter }) => {
  const handleSelectChange = (event) => {
    setBattleRatingFilter(event.target.value);
  };

  return (
    <div>
      <label className="w-28 inline-block" htmlFor="battle-rating-selector">
        Battle Rating:
      </label>
      <select
        name="battle-rating-selector"
        id="battle-rating-selector"
        value={battleRatingFilter}
        onChange={handleSelectChange}
      >
        {battleRatings.map((rating, index) => (
          <option key={`${rating}${index}`} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BattleRatingSelect;

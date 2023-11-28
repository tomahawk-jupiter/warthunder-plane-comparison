const nations = [
  "All",
  "USA",
  "Germany",
  "USSR",
  "Britain",
  "Japan",
  "France",
  "China",
  "Italy",
  "Sweden",
  "Israel",
];

const NationSelect = ({ nationFilter, setNationFilter }) => {
  const handleSelectChange = (event) => {
    setNationFilter(event.target.value);
  };
  return (
    <div>
      <label htmlFor="nationSelector">Nation:</label>
      <select
        name="nationSelector"
        id="nationSelector"
        value={nationFilter}
        onChange={handleSelectChange}
      >
        <option value="">--Choose nation--</option>
        {nations.map((nation, index) => {
          return (
            <option key={`${nation}${index}`} value={nation}>
              {nation}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default NationSelect;

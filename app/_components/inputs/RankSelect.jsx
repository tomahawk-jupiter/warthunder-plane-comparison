const ranks = ["All", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const RankSelect = ({ rankFilter, setRankFilter }) => {
  const handleSelectChange = (event) => {
    setRankFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="rank-selector">Rank:</label>
      <select
        name="rank-selector"
        id="rank-selector"
        value={rankFilter}
        onChange={handleSelectChange}
      >
        {ranks.map((rank, index) => (
          <option key={`${rank}${index}`} value={rank}>
            {rank}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RankSelect;

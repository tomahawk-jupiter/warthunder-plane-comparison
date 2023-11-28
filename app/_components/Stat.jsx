const Stat = ({ statLabel, statValue, selectedPlaneName, bestStat }) => {
  return (
    <div>
      <span>{statLabel}:</span>
      <span
        className={
          bestStat == selectedPlaneName
            ? "text-green-700"
            : bestStat == "Equal"
            ? ""
            : "text-red-900"
        }
      >
        {statValue}
      </span>
    </div>
  );
};

export default Stat;

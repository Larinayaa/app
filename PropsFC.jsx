const root = ReactDOM.createRoot(document.getElementById("root"));
const champions = [
  { name: "Магнус Карлсен", yearsOfChampions: "2013–2023", country: "Норвегия" },
  { name: "Висванатан Ананд", yearsOfChampions: "2007–2013", country: "Индия" },
  { name: "Владимир Крамник", yearsOfChampions: "2000–2007", country: "Россия" },
  { name: "Гарри Каспаров", yearsOfChampions: "1985–2000", country: "Россия" },
  { name: "Бобби Фишер", yearsOfChampions: "1972–1975", country: "Америка" },
];
const PropsFC = () => {
  const [championsList, setChampionsList] = React.useState(champions);
  const handleDelete = (name) => {
    const updatedList = championsList.filter(champion => champion.name !== name);
    setChampionsList(updatedList);
  };
  return (
    <>
      <h1>Чемпионы мира по шахматам</h1>
      {championsList.map((champion) => (
        <Champion
          key={champion.name}
          name={champion.name}
          yearsOfChampions={champion.yearsOfChampions}
          country={champion.country}
          onDelete={() => handleDelete(champion.name)}
        />
      ))}
    </>
  );
};
const Champion = ({ name, yearsOfChampions, country, onDelete }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [updatedName, setUpdatedName] = React.useState(name);
  const [updatedYears, setUpdatedYears] = React.useState(yearsOfChampions);
  const [updatedCountry, setUpdatedCountry] = React.useState(country);
  const nameRef = React.useRef();
  const yearsRef = React.useRef();
  const countryRef = React.useRef();

  const handleClickSave = () => {
    setUpdatedName(nameRef.current.value);
    setUpdatedYears(yearsRef.current.value);
    setUpdatedCountry(countryRef.current.value);
    setIsEdit(false);
  };
  return isEdit ? (
    <div className="championCard">
      <textarea ref={nameRef} defaultValue={updatedName} />
      <input ref={yearsRef} defaultValue={updatedYears} />
      <input ref={countryRef} defaultValue={updatedCountry} />
      <button onClick={handleClickSave}>Save</button>
    </div>
  ) : (
    <div className="championCard">
      <h2 className="championName">Имя: {updatedName}</h2>
      <p className="championYears">Годы чемпионства: {updatedYears}</p>
      <p className="championCountry">Страна: {updatedCountry}</p>
      <button onClick={() => setIsEdit(true)}>Изменить</button>
      <button onClick={onDelete} style={{ backgroundColor: "blue", marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
};
root.render(<PropsFC />);

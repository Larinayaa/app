const EditFunctionChempion = ({ name, yearsOfChampions, country }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const [editedName, setEditedName] = React.useState(name);
    const [editedYears, setEditedYears] = React.useState(yearsOfChampions);
  
    const handleSave = () => {
      setIsEdit(false);
    };
  
    return isEdit ? (
      <div className="championCard">
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <input
          type="text"
          value={editedYears}
          onChange={(e) => setEditedYears(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    ) : (
      <div className="championCard">
        <h2>{editedName}</h2>
        <p>Годы чемпионства: {editedYears}</p>
        <p>Страна: {country}</p>
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </div>
    );
  };
  
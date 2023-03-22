import { h } from 'preact';

function Popup(props){
    const options = [
      //List of potential flights to choose.
        { value: ["London"], label: "London"},
        { value : ["Bonn"], label: 'Bonn' },
        { value: ["Sydney"], label: 'Sydney' },
        { value: ["Madrid"], label: "Madrid"},
        { value: ["Rome"], label: "Rome"},
        { value: ["Miami"], label: "Miami"},
      ];

      const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        props.onDropdownChange(selectedValue);
      }

  return (
    <div className="popup">
      <div className="popup-inner">
        <select class = {style.dropdown} id="dropdown" onChange={handleDropdownChange} value = "">
              {options.map((option) => (
                  <option key={option.value} value={option.value}>
                      {option.label}
                  </option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default Popup;
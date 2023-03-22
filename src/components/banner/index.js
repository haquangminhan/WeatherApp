import { h } from 'preact';
import style from './style.banner';

function banner(props) {
  const options = [
    //Lists of available options of flights, and secondary destinations. 
    { value: ["London", "Paris", "Hanoi"], label: "STN - CDG"},
    { value : ["Bonn", "Sydney", "Hanoi"], label: 'CGN - SYD' },
    { value: ["Sydney", "Madrid", "Hanoi"], label: 'SYD - MAD' },
    { value: ["Madrid", "London", "Hanoi"], label: "MAD - STN"},
    { value: ["Rome", "Paris", "Hanoi"], label: "FCO - CDG"},
    { value: ["Miami", "Rome", "Hanoi"], label: "MIA - FCO"},
  ];

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    props.onDropdownChange(selectedValue);
  }

  return (
    //The banner which spans across the page is consisted within this page, each title is created via
    // a h1 tag. 
    <header class = {style.banner}>
      <div class = {style.rowContainer}> 
      
      

        <div>
          <img className={style.todayImage} src='../../assets/backgrounds/map.png' alt='image1' />
          <h1 class = {style.today}> Today</h1>
        </div>

        <h1>

        <div>
          <img className={style.flightsImage} src='../../assets/backgrounds/planes.png' alt='image1' />
          <label class = {style.flights} htmlFor="dropdown">Flights</label>
          <select class = {style.dropdown} id="dropdown" onChange={handleDropdownChange} value = "">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                  {option.label}
              </option>
            ))}
          </select>
        </div>
        
        </h1>

        <div>
          <img className={style.airImage} src='../../assets/backgrounds/air.png' alt='image1' />
          <h1 class = {style.air}> Air </h1>
        </div>

        <h1>Help</h1>
      </div>
      
    </header>
  );
}

export default banner;
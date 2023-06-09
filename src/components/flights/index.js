import { h, render, Component } from 'preact';
import style from './style_header';

// Top part of the screen - Location / Date / Current, Min, Max Temperature
export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let location, temp, date, temp_min, temp_max;
        //variables to store different time phases.
        // props.data = current weather forecast
        if (this.props.data) {
            location = this.props.data['name'];
            temp = parseInt(this.props.data['main']['temp']);
            temp_min = parseInt(this.props.data['main']['temp_min']);
            temp_max = parseInt(this.props.data['main']['temp_max']);
            date = new Date().toLocaleString('en-US', {weekday: 'short', month: 'short', day: 'numeric'});
        }

        console.log(typeof(date))

        //structure of the display of weather. From city to time.
        return (
            this.props.data ? (
                <div class={style.header}>
                    <div class={style.locationBox}>
                        <div class={style.city}>{location}</div>
                        <span class={style.temp}>{temp}°</span>
                        <div class={style.date}>{date}</div>
                        <div>
                            <span>L:{temp_min}° </span>
                            <span>H:{temp_max}°</span>
                        </div>
                    </div>
                </div>
            ) : null 
        );
    }
}
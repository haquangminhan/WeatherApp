import { h, render, Component } from 'preact';
import style from './style_header';

// Top part of the screen - Location / Date / Current, Min, Max Temperature
export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let location, temp, date, temp_min, temp_max;
        // props.data = current weather forecast
        if (this.props.data) {
            location = this.props.data['name'];
            temp = parseInt(this.props.data['main']['temp']);
            temp_min = parseInt(this.props.data['main']['temp_min']);
            temp_max = parseInt(this.props.data['main']['temp_max']);
            date = new Date().toLocaleString('en-US', {weekday: 'short', month: 'short', day: 'numeric'});
        }

        console.log(typeof(date))

        return (
            this.props.data ? (
              //Similar structure to displaying weather.
                <div class={style.header}>
                    <div class={style.locationBox}>
                        <div class={style.city}>{location}</div>
                        <span class={style.temp}>{temp}°</span>
                        <div class={style.date}>{date}</div>
                          {temp > 20 ? (
                            // Checking temperatures to decide icons.
                                <img className={style.image} src='../../assets/backgrounds/sun.png' alt='image1' />
                              ) : temp > 15 ? (
                                <img className={style.image} src='../../assets/backgrounds/cloudy.png' alt='image2' />
                              ) : temp > 10 ? (
                                <img className={style.image} src='../../assets/backgrounds/cloud.png' alt='image3' />
                              ) : temp > 0 ? (
                                <img className={style.image} src='../../assets/backgrounds/cloud.png' alt='image4' />
                              ) : (
                                <img className={style.image} src='../../assets/backgrounds/snow.png' alt='image5' />
                              )}

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
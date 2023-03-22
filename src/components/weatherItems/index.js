import { h, render, Component } from 'preact';
import style from './style_display';

export default class WeatherItem extends Component {
  render() {
    const { item, displayFuture, index } = this.props;
    const date = new Date(item.dt * 1000);
    const precipitation = item.pop * 100;


    //Main component for displaying the weather when needed. 
    //Used for displaying weather and potential warnings when necessary.
  
    if (!displayFuture) 
    {
      return (
        <div className={style.container}>
          <label class = {style.time}>{date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}</label>
          <div className = {style.rowContainer}>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
              className={`${style.icon}`}
            />
            
            <label class={style.precipitation}>{precipitation.toFixed(0)}%</label>
            {precipitation > 40 ? (
                <div class={style.alert}>WEATHER WARNING</div>
              ) : precipitation > 10 ? (
                <div class={style.alertYellow}>POTENTIAL WEATHER THREAT</div>
              ) : null}
            
            <label class={style.temp}>{Math.round(item.main.temp)}°C</label>
          </div>
         
          
        </div>
      );
    }
    //If precipitation is greater than 40 or 10 weather alerts will show up on the bottom tab
    if (index % 8 === 0) 
    {
      return (
        <div className={style.container}>
          <label>
            {date.toLocaleString('en-US', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            })}
          </label>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt=""
              className={style.icon}
            />
          </div>
          <label class={style.precipitation}>{precipitation.toFixed(0)}%</label>
          <label class = {style.temp}>{Math.round(item.main.temp)}°C</label>
          {precipitation > 40 && <div class={style.alert}>ALERT !</div>}
        </div>
      );
    }
  
    return null;
  }
  }
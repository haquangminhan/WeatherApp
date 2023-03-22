import { h, render, Component } from 'preact';
import style from './style_weather';
import WeatherItem from '../weatherItems'

export default class Weather extends Component {
        // a constructor with initial set states
        constructor(props) {
            super(props);
            this.state = {
              displayFuture: false,
              startIdx: 0,
              endIdx: 4,
              added: 4,
            };
          }

        getCurrent = () => {
            this.setState(() => ({
                startIdx: 0,
                endIdx: 4,
                displayFuture: false,
                added:4,
            }));
        };
        
        // Recieves the next hour of forecasts from the API
        getNextHour = () => {
            this.setState((prevState) => {
                const newEndIdx = prevState.endIdx + 1; // increment the number of elements to show by 1, but not beyond 9
                const newStartIdx = prevState.startIdx + 1;
                const newAdded = prevState.added + 1;
                
                if (newAdded > 8) 
                {
                    return null; // reached 24h forecast = 8 element = each element is the forcast over 3 hours
                } 
                else 
                {
                    return {
                        startIdx: newStartIdx,
                        endIdx: newEndIdx,
                        displayFuture: false,
                        added: newAdded,
                    };
                }
            });
        };


        // Recieves tomorrows forecasts for weather depending on the API
        getTommorrow = () => {
            this.setState((prevState) => {
                const newDayStartIdx = this.props.data ? this.props.data.list.findIndex((item, idx) => {
                    const date = new Date(item.dt * 1000);
                    return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0;
                }) : null;

                return {
                    startIdx: newDayStartIdx,
                    endIdx: newDayStartIdx + 4,
                    displayFuture: false,
                    added: 4,
                };
                
            });
        };

        // Recieves the weather forecasts for the next 5 days depending on the API.
        getNextFive = () => {
            this.setState((prevState) => {
                return {
                    startIdx: 9,
                    endIdx: 40,
                    displayFuture: true,
                    added: 9,
                };
                
            });
        };

        //Render component
        render() {
            const { endIdx, startIdx } = this.state;

            return (
                <div className={style.cont}>
                    <div className={style.columnContainer}></div>
                    {this.props.data  ? (
                        <div className={style.columnContainer}>
                            {this.props.data.list.slice(startIdx, endIdx).map((item, idx) => (
                                <WeatherItem key={idx} item={item} displayFuture={this.state.displayFuture} index={idx} />
                            ))}
                            {!this.state.displayFuture ? (
                                <button class={style.nextButton} onClick={this.getNextHour}>  </button>
                            ) : null} 
                        </div>
                    ) : null}
                </div>
            );
        }
    }
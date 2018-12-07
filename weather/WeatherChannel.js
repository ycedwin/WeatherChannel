import React, {Component} from 'react' ;
import CityCondition from './CityCondition';
import Forecast from './Forecast';
import {fetchConditionData, fetchForecast} from '../api/weather';

export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditionData: {},
            curCity: 'brisbane',
            forecast: []
        }
    }
    handleConditionData(data) {
        const conditionData = {
           city: data.display_location.city,
           weather: data.weather,
           temp: data.temp_c
        }
        this.setState({conditionData: conditionData});
    }

    handleForecaseData(data) {
        const forecast = data.map(item => {return {
            weekday: item.date.weekday_short,
            high: item.high.celsius,
            low: item.low.celsius,
            image: item.icon_url
        }})
        this.setState({forecast: forecast})
    }

    onSubmit() {
        fetchConditionData(this.state.curCity)
         .then(data => this.handleConditionData(data))
         .catch(error => {alert(`Fail to load data`)})
         
        fetchForecast(this.state.curCity)
            .then(data => this.handleForecaseData(data))
    }

    componentDidMount() {
        fetchConditionData(this.state.curCity)
         .then(data => this.handleConditionData(data))
         .catch(error => {alert(`Fail to load data`)})
         
        fetchForecast(this.state.curCity)
            .then(data => this.handleForecaseData(data))

        //fetchConditionData(this.state.curCity)
        //.then((data => {this.handleConditionData(data)}))
        //.catch(error => handleError(error))
    }

    render() {
        const {city,weather,temp} = this.state.conditionData;
        return (
            <main>
                <nav style={{padding: 10}}>
                    <input value={this.state.curCity}
                        onChange={(event) => this.setState({curCity:event.target.value})} />
                    <button onClick={() => {this.onSubmit()} }>Load</button>
                </nav>
                <section id='left'>
                    <CityCondition
                    city={city}
                    weather={weather}
                    temp={temp}
                    />
                </section>
                <section id='right'>
                    <Forecast
                        days = {this.state.forecast}
                    />
                </section>
            </main>
        )
    }
}

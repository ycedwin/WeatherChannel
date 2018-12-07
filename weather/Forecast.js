import React from 'react' ;

function DailyItem(props) {
    console.log(props);
    const day = props.day;
    return(
        <div className="item">
            <span>{day.weekday}</span>
            <span><img src={day.image}/></span>
            <span>{day.high}</span>
            <span>{day.low}</span>
        </div>
    )
}

export default function Forecast(props) {
    return (
        props.days.map( (day, i) => i<5 && <DailyItem key={`${day.weekday}_${i}`} day={day} /> )
    )
}

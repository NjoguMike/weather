import React from "react";
import DataItem from "./DataItem";

function Weekly({ weatherInfo }){
// console.log(weatherInfo.data.filter(dat => dat.datetime === "2023-09-12"))
const { city_name , country_code , data } = weatherInfo
// console.log(city_name , country_code , data)
const chart = data.map(data => <DataItem key={data.valid_date} city={city_name} prop={data}/>)

return(
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Temperature</th>
                    <th>Precipitation</th>
                </tr>
                {chart}
            </tbody>
        </table>
    </div>
)
}

export default Weekly
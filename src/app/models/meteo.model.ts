//interfaces CityInfo, CurrentCondition, ForecastDay et MeteoResponse correspondant au JSON renvoyé par
//https://prevision-meteo.ch/services/json/toulouse

interface CityInfo {
    name: "Toulouse",
    country: "France",
    latitude: "43.5999985",
    longitude: "1.4502780",
    elevation: "146",
    sunrise: "07:49",
    sunset:	"17:29"
}

interface CurrentCondition {
    date: "17.11.2026",
    hour: "13:00",
    tmp: 15,
    wnd_spd: 8,
    wnd_gust: 17,
    wnd_dir: "SO",
    pressure: 1006,
    humidity: 73,
    condition: "Fortement nuageux",
    condition_key: "fortement-nuageux",
    icon: "https://previmet.com/style/images/icon/fortement-nuageux.png",
    icon_big: "https://previmet.com/style/images/icon/fortement-nuageux-big.png"
}

interface ForecastDay {
    date: "17.11.2026",
    day_short: "Mar.",
    day_long: "Mardi",
    tmin: 12,
    tmax: 16,
    condition: "Pluie faible",
    condition_key: "pluie-faible",
    icon: "https://previmet.com/style/images/icon/pluie-faible.png",
    icon_big: "https://previmet.com/style/images/icon/pluie-faible-big.png"
}

interface MeteoResponse {
    //what am I supposed to put here?
}
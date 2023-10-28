export async function getLocation() {
    if ("geolocation" in navigator) {
        console.log("Attempting to use Geolocation Services")
        try {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                };
                console.log("location: ", location)
                return location;
            });
        } catch (err) {
            console.log("Geolocation Services Denied")
            return false;
        }
    }
}

export async function getWeather({lat, long}){
    const wapi = await fetch(`https://api.weather.gov/points/${lat},${long}`)
    const forecast = (await wapi.json()).properties.forecast;
    console.log(forecast);
    return forecast;
}
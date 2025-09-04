
export const fetchCars = async () => {
    try {

        const response = await fetch("https://api.api-ninjas.com/v1/cars?model=camry", {
            method: "GET",
            headers: {
                "X-Api-Key": "0VhTPEezrHYfbuiGTYHrdw==aSLkkOt6sL1ouRa2"
            }
        });

        const result = await response.json();

        return result;

    } catch (err) {
        console.log(err)
    }
}
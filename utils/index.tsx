import { ResultProps } from "types";

export const fetchCars = async (object: { make: string, model: string, year: string }) => {
    try {

        const response = await fetch(`https://api.api-ninjas.com/v1/cars?model=${object.model}&make=${object.make}&year=${object.year}`, {
            method: "GET",
            headers: {
                "X-Api-Key": "0VhTPEezrHYfbuiGTYHrdw==aSLkkOt6sL1ouRa2"
            }
        });


        const result = await response.json();

        if (result.length === 0) {
            return [
                {
                    "class": "compact car",
                    "cylinders": 4,
                    "displacement": 1.6,
                    "drive": "fwd",
                    "fuel_type": "gas",
                    "make": "toyota",
                    "model": "corolla",
                    "transmission": "a",
                    "year": 1993
                }
            ]
        }

        return result;


    } catch (err) {
        console.log(err)
    }
}


export const generateCarImageUrl = (car: ResultProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model ? model.split(" ")[0] : "");
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 
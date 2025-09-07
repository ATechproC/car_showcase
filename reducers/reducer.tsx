export function reducer(currentState: any, { type, payload }: { type: any, payload?: any }) {
    switch (type) {

        case "handled": {
            let newState;
            for (let i = 0; i < payload.listManufacturers.length; i++) {
                if (payload.listManufacturers[i].id === payload.id) {
                    let newName = [];
                    for (let j = 0; j < payload.listManufacturers[i].name.length; j++) {
                        if (j === 0) newName[j] = payload.listManufacturers[i].name[j].toUpperCase();
                        else newName[j] = payload.listManufacturers[i].name[j].toLowerCase();
                    }
                    newState = {
                        ...currentState,
                        make: newName.join(""),
                    };
                }
            }

            return newState;
        }

        case "changed": {
            return {
                ...currentState,
                make: payload.value,
            };
        }

        case "changedModel": {
            return {
                ...currentState,
                model: payload.value,
            };
        }

        case "handleProduction": {
            let newState;
            for (let i = 0; i < payload.yearsOfProduction.length; i++) {
                if (payload.yearsOfProduction[i].id === payload.id) {
                    newState = {
                        ...currentState, year: payload.yearsOfProduction[i].value
                    };
                }
            }
            return newState;
        }

        case "changed": {
            return {
                ...currentState, year: payload.value,
            }
        }

        default: {
            throw Error("unknown action : ", type);
        }
    }
}
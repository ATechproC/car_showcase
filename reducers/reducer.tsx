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

        case "selected" : {
            return {
                ...currentState, year : payload.value,
            }
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
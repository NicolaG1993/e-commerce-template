/* eslint-disable indent */

const initialState = {};
const LOAD_DATA = "LOAD_DATA";

export default function loadStore(state = initialState, action) {
    switch (action.type) {
        case LOAD_DATA: {
            let allStore = action.payload;

            console.log("LOAD_DATA: ", allStore);

            return {
                ...state,
                allStore,
            };
        }
    }
}

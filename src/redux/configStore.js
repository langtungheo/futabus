import { applyMiddleware, createStore, combineReducers } from "redux";
import createmidlleWare from "redux-saga";
import modalReducer from "./reducers/ModalReducer";
import provincesReducer from "./reducers/provincesReducer";
import stationsReducers from "./reducers/stationsReducers";
import tripsReducers from "./reducers/tripsReducers";
import userReducers from "./reducers/userReducers";
import { rootSaga } from "./saga/rootSaga";

const midlleWareSaga = createmidlleWare();
const rootReducers = combineReducers({
    stations : stationsReducers,
    trips : tripsReducers,
    modal : modalReducer,
    user : userReducers,
    provinces : provincesReducer,
})

const store = createStore(rootReducers, applyMiddleware(midlleWareSaga))

midlleWareSaga.run(rootSaga);

export default store;

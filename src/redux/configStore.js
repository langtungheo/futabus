import { applyMiddleware, createStore, combineReducers } from "redux";
import createmidlleWare from "redux-saga";
import stationsReducers from "./reducers/stationsReducers";
import tripsReducers from "./reducers/tripsReducers";
import { rootSaga } from "./saga/rootSaga";

const midlleWareSaga = createmidlleWare();
const rootReducers = combineReducers({
    stations : stationsReducers,
    trips : tripsReducers,
})

const store = createStore(rootReducers, applyMiddleware(midlleWareSaga))

midlleWareSaga.run(rootSaga);

export default store;

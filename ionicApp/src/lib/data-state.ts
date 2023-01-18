import {atom} from "recoil"

interface DataState {
    data: any
}
const defaultDataState: DataState = {
    data: []
}

export const DataState = atom<DataState>{(
    key: "dataState",
    default: defaultDataState
)}
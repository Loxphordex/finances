import { UPDATEINCOME } from '../Actions/actions'

interface IState {
    income: number
}

const initialState = {
    income: 0
}

export function incomeFormReducer(state: IState = initialState, action: any) {
    switch (action.type) {
        case UPDATEINCOME:
            return Object.assign({}, state, {
                income: action.payload.income
            })
        default:
            return state
    }
}
import { AUpdateIncome } from '../Actions/actions'
import { Dispatch } from 'redux'

export const MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateIncome(num: number) {
            dispatch(AUpdateIncome(num))
        }
    }
}
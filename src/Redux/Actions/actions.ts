export const UPDATEINCOME = 'UPDATEINCOME'

export function AUpdateIncome(num: number) {
    return {
        type: UPDATEINCOME,
        payload: {
            income: num
        }
    }
}
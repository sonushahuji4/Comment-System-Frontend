import * as actions from './actions';

export const initialState = {
    customer : {
        customerId : null,
        name : null,
        email : null,
        picture: null
    }
};

export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case actions.CUSTOMER:
            return {
                ...state,
                customer:action.payload.customer
        }
        default: {
            return state;
        }
    }
}
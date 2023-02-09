import * as actions from './actions';

export const initialState = {
    customer : {
        customer_id : null,
        customer_name : null,
        email : null,
        picture: null,
        createdAt: null,
        updatedAt: null
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
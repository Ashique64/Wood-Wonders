const initialState = {
    user: null,
    is_authenticated: false,
    is_admin: false,
    error: null,
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                is_authenticated: true,
                is_admin: action.payload.is_superuser,
                error: null,
            };

        case "FETCH_USER_FAILURE":
            return {
                ...state,
                user: null,
                is_authenticated: false,
                is_admin: false,
                error: action.payload,
            };

        case "LOGOUT_USER":
            return {
                ...state,
                user: null,
                is_authenticated: false,
                is_admin: false,
                error: null,
            };

        default:
            return state;
    }
};

export default userReducer;
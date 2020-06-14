const initState = {
    authError:null
}

const authReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Failed')
            return {
                ...state,
                authError:'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError:null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Signout');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('Something went wrong..!!');
            return state;

        case 'SIGNUP_SUCCESS':
            console.log('User created');
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_FAIL':
            console.log('Something went wrong');
            return {
                ...state,
                authError:action.err.message
            }
    
        default:
            return state;
    }
}

export default authReducer;
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
    
        default:
            return state;
    }
}

export default authReducer;
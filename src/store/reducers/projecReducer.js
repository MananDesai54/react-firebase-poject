const initState = {
    projects:[
        {id:'1',title:'MERN',content:'Make react full stack app'},
        {id:'2',title:'MEAN',content:'full stack app'},
        {id:'3',title:'MEVN',content:'full stack app'}
    ]
}

const projectReducer = (state=initState,action)=>{
    if(action.type==='CREATE_PROJECT') {
        console.log(action);
        // const projects = [...state.projects,action.project];
        // return {
        //     ...state,
        //     projects:projects
        // }
        return state
    }else if(action.type === 'CREATE_PROJECT_ERROR') {
        console.log(action.err);
        return state
    }else {
        return state
    }
    // return state;
}

export default projectReducer;
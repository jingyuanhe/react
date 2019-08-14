const defaultState={
    value:'',
    list:[]
}
export default (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case "change_input_value":
            {
                //console.log(action.value)
                let newState=Object.assign({},state,{
                    value:action.value
                });
                return newState;
            }
        case "add_todo":{
            let newTodoList=Object.assign({},state,action);
            newTodoList.list.push(newTodoList.value);
            newTodoList.value='';
            return newTodoList;
        }    
        default:
            return state 
    }
   // return state
}
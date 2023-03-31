
export const todoReducer = (intialState, action) =>{
    switch(action.type){
        case 'ABC':
            throw new Error('Action.type = ABC no implementada')
        
        case 'ADD_TODO':
            return[
              ...intialState,
                action.payload
            ]
            
            
        case 'DELETE_TODO':
            return intialState.filter(todo => todo.id !== action.payload)
              

        case 'TOGGLE_TODO':
            return intialState.map( todo => {
                
                if(todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        

        default:
            return intialState
    }
}
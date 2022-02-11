const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  };
  
  const appReducer = (state = initialWagonState, action) =>{
    switch(action.type){
      case 'gather':{
        return{
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1,
          cash: state.cash
        }
      }
      case 'travel': {
  
        if(state.supplies < 20){
          return {...state}        
        }
        else {
          return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + (action.payload),
          cash: state.cash
        } 
        }
            
      }
      case 'tippedWagon':{
        return{
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1,
          cash: state.cash
        }
      }
      case 'sell':{
        return{
          ...state,
          supplies: state.supplies - 20,
          distance: state.distance,
          days: state.days,
          cash: state.cash + 5
        }
      }
        case 'buy':{
          return{
          ...state,
          supplies: state.supplies + 25,
          distance: state.distance,
          days: state.days,
          cash: state.cash - 15}
        }
      
      case 'theft': {
        return {...state,
          supplies: state.supplies,
          distance: state.distance,
          days: state.days ,
          cash: state.cash * 0.5}
      }
      default: {
        return state
      }
    }
  }
  
  let wagon = appReducer(undefined,{});
  wagon = appReducer(wagon,{type: 'travel', payload: 1});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'gather'});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'tippedWagon', payload: 1});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'travel', payload: 3});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'travel', payload: 1});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'buy'});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'sell'});
  console.log(wagon);
  wagon = appReducer(wagon,{type: 'theft'});
  console.log(wagon);
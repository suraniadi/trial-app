// import React from 'react';

const reducer = (state = {images : [], name : ""}, action) => {
    console.log(action.type);
    switch(action.type) {
        case "imageName":
            return {
                ...state,
                name : action.payload
            }
        case "Images" : 
            return  {
                ...state,
                images: action.payload
            }
        default :
         return "NO";
    }

} 

export default reducer;
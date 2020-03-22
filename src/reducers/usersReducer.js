// import React from 'react';

const reducer = (state = {images : []}, action) => {
    switch(action.type) {
        case "Users" : 
            return  {
                images: [
                {
                    id: '1',
                },
                {
                    id: '2'
                }
            ]}
        default :
         return "NO";
    }

} 

export default reducer;
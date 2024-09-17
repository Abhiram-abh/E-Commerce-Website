import React,{createContext} from 'react'
import all_product from '../components/Assets/all_product'



export const ShopContest = createContext(null);

const ShopContestProvider=(props)=>{
    const contextValue = {all_product};

    return(
        <ShopContest.Provider value={contextValue}>
        {props.children}
        </ShopContest.Provider>
    )
}

export default ShopContestProvider;
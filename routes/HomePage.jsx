import React, { useState } from "react";

const HomePage = () => {
    const [listOrder, setListOrder] = useState(1);

    return (
        <div className="homepage">
            <div className="list-order">
                <span>Order by: </span>
                <div>
                    <input 
                        type="radio"
                        id="newest"
                        name='order'
                        value={1}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 1}
                    />
                    
                    <label htmlFor="newest">
                        Newest
                    </label>
                    
                </div>
                <div>
                    <input 
                        type="radio"
                        id="popular"
                        name='order'
                        value={2}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setListOrder(e.target.value)
                        }}
                        checked={listOrder == 2}
                    />
                    <label htmlFor="popular">
                        Most Popular
                    </label>
                </div>
            </div>
            <div className="feeds">
                The list order is {listOrder}
            </div>
        </div>
    )

}


export default HomePage;
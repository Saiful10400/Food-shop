import { useEffect, useState } from "react";
import contextProvider from "./appContext";
import PropTypes from "prop-types";

const Context = ({ children }) => {

  // dishes.
const [popularDish,setPopularDish]=useState(null)
const [recommendedDish,setRecommendedDish]=useState(null)

// let's fetch disheh.
useEffect(()=>{
  fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
  .then(res=>res.json())
  .then(result=>{
    const{Items:data}=result
    const popularDish=data.filter(item=>item.IsPopular)
    const recommended=data.filter(item=>item.IsRecommended)
    setPopularDish(popularDish)
    setRecommendedDish(recommended)
  })
},[])

//handle modal behaviour.
const[isModalOpen,setModalOpen]=useState(false)

  //context data object.
  const contextData = {popularDish,recommendedDish,isModalOpen,setModalOpen};
  return (
    <contextProvider.Provider value={contextData}>
      {children}
    </contextProvider.Provider>
  );
};

// props validation.
Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;

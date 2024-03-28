import Styles from "./lesson.module.css";
import {data} from "../../helper/data"
import React from "react";
import { useState } from "react";

export const LessonCard = () => {
    
    const [isBodyVisible, setIsBodyVisible] = useState(true)
    const [lessonCount, setLessonCount] = useState(6)
    const handleClearList = () => {
        setIsBodyVisible(false)
        setLessonCount(0)
    }
  return (
    <div className={Styles.container}>
      <div className={Styles.container__Header}>
        <h2><span> {lessonCount} </span> Lessons Today</h2>
      </div>
      {isBodyVisible && ( <div className= {Styles.container__Body} >{ data.map((item, index) => {
        return( <div className={Styles.container__Body__Card}>
        <img src= {item.image} alt= {item.name} />
        <div className={Styles.container__Body__Lessons}>
            <p>Lesson Name: {item.name}</p>
            <p>Lesson Hour: {item.hour}</p>

        </div>
      </div>)
      })
       }</div>)}
     
      
      
      <div className={Styles.container__Footer}>
        <button onClick={handleClearList} >Clear List</button>
      </div>
    </div>
  );
};

export default LessonCard;

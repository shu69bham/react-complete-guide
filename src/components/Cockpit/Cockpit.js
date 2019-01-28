import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    let classes_toApply = [];
    if(props.persons.length<=2){
      classes_toApply.push('red');
    }
    if(props.persons.length<=1){
      classes_toApply.push('bold');
    }

    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.red;      
    }    

    return(
        <div className={classes.Cockpit}>
            <h1>Meet the Person component</h1>
            <p className={classes_toApply.join(' ')}>This is really working</p>
            <button  
            className = {btnClass}                      
            onClick={props.clicked}>Toggle Person</button>  
        </div>
    )
}

export default cockpit
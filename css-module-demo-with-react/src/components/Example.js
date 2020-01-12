import React, { Component } from 'react';
import style from './Style.css'
export default class CssModulesExamples extends Component {
 render() {
     return (
         //single class name
         <article id="mainComponent">
         <section className={style.red}>
            Single class Name example
         </section>

        <section className={style.parent}>
                <p className={style.bold}>
                    Nested Class Name Example
                </p>
        </section> 

        <section >
                <p className={`${style.red} ${style.bold}`}>
                    Multiple class Name Class Name Example
                </p>
        </section>   
        <section >
                <p className={style.mainClass}>
                    Composition Example
                </p>
        </section>    

        <section >
                <p className={style.compositeClass}>
                    Composition Example with two different files
                </p>
        </section>  
        <section id={style.mainComponent}>
                <label> Id and tag example with css modules</label>
        </section>  
        <section >
                <p className={style.small}>Media query example 1</p>
                <p className={style.large}>Media query example 2</p>
        </section>  
        </article>      


       
     )
 }
}
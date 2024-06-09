//Setting everthing

//Importing 

import {mainbody} from './body.js' 
import {info} from './info-module.js' 
// import {initializeApp} from "./initialize.js"
import { setupCategoryFilters } from './filter.js'
import { initializeApp } from './initialize.js'
document.addEventListener("DOMContentLoaded",()=>{
   
    // const container = document.querySelector(".container")
    mainbody()
     info()
   
   
})

initializeApp()
setupCategoryFilters()


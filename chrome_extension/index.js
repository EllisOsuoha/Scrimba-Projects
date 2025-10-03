import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js"


const firebaseConfig = {
    databaseURL : "https://bookmark-webpage-app-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

console.log(database)

let myLeads = []
const inputEl =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.querySelector("#ul-el")
const clear = document.getElementById("clear")
const deletBtn = document.getElementById("delete-btn")
const lead = JSON.parse(localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")


if (lead) {
    myLeads = lead
    render(myLeads)
}

tabBtn.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})

function render(lead) {
    let listItems = ""
    for (let i = 0; i < lead.length; i++) {
        listItems += `
            <li>
                <a href='${lead[i]}' target='_blank' >
                ${lead[i]}</a>
            </li>
        `
    }
     ulEl.innerHTML = listItems 
}

addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
}) 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})




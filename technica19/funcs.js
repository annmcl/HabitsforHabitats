var events = {};
var tasks = {};
var storedEvents;
var storedTasks;

function getEvents(){
    var i;
    var existingEvents = JSON.parse(localStorage.getItem("eventsStr"));
    if(existingEvents === null) existingEvents = [];
    var event = document.getElementsByName("event");

    for(i = 0; i < event.length; i++)
        if(event[i].checked) {
            localStorage.setItem("e", JSON.stringify(event[i].value));
            existingEvents.push(event[i].value);
            localStorage.setItem("eventsStr", JSON.stringify(existingEvents));
        }
}


function getTasks(){
    var i;
    var existingTasks = JSON.parse(localStorage.getItem("tasksStr"));
    if(existingTasks === null) existingTasks = [];
    var task = document.getElementsByName("task");

    for(i = 0; i < task.length; i++) {
        if (task[i].checked) {
            localStorage.setItem("t", JSON.stringify(task[i].value));
            existingTasks.push(task[i].value);
            localStorage.setItem("tasksStr", JSON.stringify(existingTasks));
        }
    }
}

function printEvents() {
    var i;
    storedEvents = JSON.parse(localStorage.getItem("eventsStr"));

    for(i = 0; i < storedEvents.length; i++){
        if(storedEvents[i] === "attending_party"){
            document.getElementById("attend").innerHTML = "Attending Party";
            document.getElementById("a").innerHTML = "- bring reusable utensils";
            document.getElementById("b").innerHTML = "- bring fabric napkins";
            document.getElementById("c").innerHTML = "- bring reusable bottle/mug";
        }
        if(storedEvents[i] === "hosting_party") {
            document.getElementById("host").innerHTML = "Hosting Party";
            document.getElementById("d").innerHTML = "- buy biodegradable/bamboo/reusable utensils";
            document.getElementById("e").innerHTML = "- buy fabric napkins";
            document.getElementById("g").innerHTML = "- don't use balloons";
        }
    }
}

function printTasks(){
    var j;
    storedTasks = JSON.parse(localStorage.getItem("tasksStr"));

    for(j = 0; j < storedTasks.length; j++){
        if(storedTasks[j] === "buying_groceries"){
            document.getElementById("grocery").innerHTML = "Buying Groceries";
            document.getElementById("h").innerHTML = "- bring reusable grocery bags";
            document.getElementById("i").innerHTML = "- bring reusable produce bags";
            document.getElementById("j").innerHTML = "- buy bulk to use less packaging";
            document.getElementById("k").innerHTML = "- walk";
            document.getElementById("l").innerHTML = "- buy from local farmer's markets";
            document.getElementById("m").innerHTML = "- eat no/less meat";
        }
        if(storedTasks[j] === "shopping"){
            document.getElementById("shopping").innerHTML = "Shopping";
            document.getElementById("n").innerHTML = "- bring reusable bags";
            document.getElementById("o").innerHTML = "- buy ethically sourced goods";
            document.getElementById("p").innerHTML = "- buy natural fabrics(i.e. cotton)";
            document.getElementById("q").innerHTML = "- walk/bike if possible";
            document.getElementById("r").innerHTML = "- buy non-plastic items";
            document.getElementById("s").innerHTML = "- buy second-hand";
        }
    }

}

function printTo(){
    printEvents();
    printTasks();
}

function clr(){
    localStorage.clear();
    location.reload();
}

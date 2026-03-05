let currentTab = "all";

const active = ["text-white", "bg-blue-500", "border-blue-500"];
const inactive = ["text-slate-500", "bg-transparent", "border-slate-500"];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");


function openTab(tabName) {
    const tabs = ["all", "interview", "rejected"];
    for(let tab of tabs) {
        if(tab === tabName) {
            document.getElementById(tab + "-tab").classList.add(...active);
            document.getElementById(tab + "-tab").classList.remove(...inactive);
    
        } else {
            document.getElementById(tab + "-tab").classList.remove(...active);
            document.getElementById(tab + "-tab").classList.add(...inactive);
  
        }
    }
    if(tabName === "all") {
        
        allContainer.classList.remove("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.add("hidden");
    } else if(tabName === "interview") {
        allContainer.classList.add("hidden");
        interviewContainer.classList.remove("hidden");
        rejectedContainer.classList.add("hidden");
    } else if(tabName === "rejected") {
        allContainer.classList.add("hidden");
        interviewContainer.classList.add("hidden");
        rejectedContainer.classList.remove("hidden");
    }
}

const totalDashboard = document.getElementById("total-dashboard-count");
totalDashboard.innerText = document.getElementById("all-container").childElementCount;

const interviewDashboard = document.getElementById("interview-dashboard-count");
interviewDashboard.innerText = document.getElementById("interview-container").childElementCount;

const rejectedDashboard = document.getElementById("rejected-dashboard-count");
rejectedDashboard.innerText = rejectedContainer.children.length;

openTab(currentTab);


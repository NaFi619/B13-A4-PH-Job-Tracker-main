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



function updateDashboardCounts() {
    const allCount = document.getElementById("all-container").children.length;
    const interviewCount = document.getElementById("interview-container").children.length;
    const rejectedCount = document.getElementById("rejected-container").children.length;

    document.getElementById("total-dashboard-count").innerText = allCount + interviewCount + rejectedCount;
    document.getElementById("interview-dashboard-count").innerText = interviewCount;
    document.getElementById("rejected-dashboard-count").innerText = rejectedCount;
}


allContainer.addEventListener("click", function(event) {
    const interviewBtn = event.target.closest(".interview");
    const rejectedBtn = event.target.closest(".rejected");
    const deleteBtn = event.target.closest(".delete");
    const card = event.target.closest(".card");

    const status = card.querySelector(".status");
    
    if (interviewBtn) {
        status.innerText = "Interview";
        status.className = "mt-2 mb-2 btn btn-neutral font-semibold text-sm status whitespace-nowrap w-fit"; 
        document.getElementById("interview-container").appendChild(card);
        updateDashboardCounts();
    } 
    else if (rejectedBtn) {
        status.innerText = "Rejected";
        status.className = "mt-2 mb-2 btn btn-neutral font-semibold text-sm status whitespace-nowrap w-fit";
        document.getElementById("rejected-container").appendChild(card);
        updateDashboardCounts();
    } 
    else if (deleteBtn) {
        card.remove(); 
        updateDashboardCounts();
    }
});

openTab(currentTab);


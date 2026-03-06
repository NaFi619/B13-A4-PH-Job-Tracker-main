let currentTab = "all";

const active = ["text-white", "bg-blue-500", "border-blue-500"];
const inactive = ["text-slate-500", "bg-transparent", "border-slate-500"];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");


function checkEmptyState() {
    const noJobContainer = document.getElementById("no-job-container");
    let activeContainer;

    if (currentTab === "all") {
        activeContainer = allContainer;
    } else if (currentTab === "interview") {
        activeContainer = interviewContainer;
    } else if (currentTab === "rejected") {
        activeContainer = rejectedContainer;
    }
    if (activeContainer && activeContainer.children.length === 0) {
        noJobContainer.classList.remove("hidden");
    } else {
        noJobContainer.classList.add("hidden");
    }
}


function openTab(tabName) {
    currentTab = tabName;
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
    checkEmptyState();
}



function updateDashboardCounts() {
    const allCount = document.getElementById("all-container").children.length;
    const interviewCount = document.getElementById("interview-container").children.length;
    const rejectedCount = document.getElementById("rejected-container").children.length;
    const totalTextCount = document.getElementById("total-job-count-dashboard-count");
    
    
    const totalSum = allCount + interviewCount + rejectedCount;

    document.getElementById("total-dashboard-count").innerText = totalSum;
    document.getElementById("interview-dashboard-count").innerText = interviewCount;
    document.getElementById("rejected-dashboard-count").innerText = rejectedCount;
    
    totalTextCount.innerText = totalSum;
    
}

allContainer.addEventListener("click", function(event) {
    const interviewBtn = event.target.closest(".interview");
    const rejectedBtn = event.target.closest(".rejected");
    const deleteBtn = event.target.closest(".delete");
    const card = event.target.closest(".card");

    const status = card.querySelector(".status");

    const noJobThing = document.getElementById("no-job-container");
    
    if (interviewBtn) {
        status.innerText = "Interviewed";
        status.className = "mt-2 mb-2 btn btn-success rounded-full font-semibold text-sm status whitespace-nowrap w-fit"; 
        document.getElementById("interview-container").appendChild(card);
        updateDashboardCounts();
        checkEmptyState();
    } 
    else if (rejectedBtn) {
        status.innerText = "Rejected";
        status.className = "mt-2 mb-2 btn btn-error rounded-full font-semibold text-sm status whitespace-nowrap w-fit";
        document.getElementById("rejected-container").appendChild(card);
        updateDashboardCounts();
        checkEmptyState();
    } 
    else if (deleteBtn) {
        card.remove(); 
        updateDashboardCounts();
        checkEmptyState();
    }
});

openTab(currentTab);
updateDashboardCounts();


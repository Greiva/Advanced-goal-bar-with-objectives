let goalDetails = {
    1: {
        "name": '{goal1}',
        "startingPoint": '{goal1start}',
        "goal": '{goal1end}',
        "level":1
    },
    2: {
        "name": '{goal2}',
        "startingPoint": '{goal2start}',
        "goal": '{goal2end}',
        "level":2
    },
    3: {
        "name": '{goal3}',
        "startingPoint": '{goal3start}',
        "goal": '{goal3end}',
        "level":3
    },
    4: {
        "name": '{goal4}',
        "startingPoint": '{goal4start}',
        "goal": '{goal4end}',
        "level":4
    },
    5: {
        "name":  '{goal5}',
        "startingPoint": '{goal5start}',
        "goal": '{goal5end}',
        "level":5
    }
}
let currentGoal
let currentProgress
let starterFollowerCount
let currentFollows



function levelChecker() {
    if (currentFollows >= goalDetails[5].startingPoint && currentFollows <= goalDetails[5].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[5].level; 
        currentGoal = goalDetails[5].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[5].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[5].name;
        currentChanged();
    }
         
    else if (currentFollows >= goalDetails[4].startingPoint && currentFollows <= goalDetails[4].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[4].level; 
        currentGoal = goalDetails[4].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[4].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[4].name;
        currentChanged();
     
    }
        else if (currentFollows >= goalDetails[3].startingPoint && currentFollows <= goalDetails[3].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[3].level; 
        currentGoal = goalDetails[3].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[3].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[3].name;
        currentChanged();
    }  else if (currentFollows >= goalDetails[2].startingPoint && currentFollows <= goalDetails[2].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[2].level; 
        currentGoal = goalDetails[2].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[2].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[2].name;
        currentChanged();
    }
    
    
    
    else if (currentFollows >= goalDetails[1].startingPoint && currentFollows < goalDetails[1].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[1].level; 
        currentGoal = goalDetails[1].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[1].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[1].name;
        currentChanged();
    

    }
    
    
    else {
        console.log("nothing changed");

    }
}


function currentChanged() {

    let onePercent = (currentGoal - starterFollowerCount) / 100;

    let barProgress = (currentFollows - starterFollowerCount) / onePercent;

    document.getElementById("achieved-number").textContent = currentFollows;

  

    if (barProgress < 100 && barProgress>0) {
       document.getElementById("progress-bar-complete").style.width = barProgress + "%";
    } else if (barProgress >= 100 || parseInt(barProgress) < -0 ) {
       levelChecker();
        
    }

  
};

window.addEventListener('onWidgetLoad', function (obj) {
  	const fieldData = obj.detail.fieldData;
	let data=obj["detail"]["session"]["data"];


   	currentFollows = parseInt(data["follower-total"]["count"]);
  	levelChecker();
    let onePercent =(currentGoal-starterFollowerCount)/100;
    let currentProgress = (currentFollows-starterFollowerCount) /onePercent;

    currentChanged(); 
     
});

window.addEventListener('onSessionUpdate', function (obj) {
  const data = obj.detail.session
  const fieldData = obj.detail.fieldData;
  currentFollows = parseInt(data["follower-total"]["count"]);
  currentChanged();
});


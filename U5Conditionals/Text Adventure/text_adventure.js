alert("You are on a long journey through the mountains on your way to visit your friends. Your friends are planning to meet you at a restaurant to have lunch in the afternoon. You are driving alone when you notice that you are about to run low on gas.")

let now_or_later = prompt ("Do you (1) get gas at the nearest exit, or (2) wait until you come across a bigger city? Please press 1 to get gas now or 2 to wait to get gas later.")

if(now_or_later == 1) {
    let nearest_or_futher = prompt ("As you make your decision to get gas now, you notice that there is a gas station at the exit that is .5 miles down the road. However, it is not the gas that you prefer as your car runs better on different gas. So, do (1) you exit now, or (2) wait until the next exit which will have a gas station you prefer?")
    if(nearest_or_futher == 1){
        alert("Congratulations! You have successfully refueled your car and continue your journey to see your friends.");
    } else {
        alert("As you continue down the mountains to find your preferred gas station, you find another exit that has the gas station you like. Once you exit, you notice that the road is much longer and twistier than you expected. As you continue down this road, you hope that the gas station is only a little ways longer as you are now dangerously low on gas. Despite this hope, it is too late; you have now run out of gas and are stuck on this road. Not to fear as another driver stops to help you a few hours later. While you are thankful to the driver who helped you, your friends met without you as you missed the meeting time. You will have to wait to see your friends during another week.")
    }
    

} else {
    alert("You decide to chance it and wait to get gas. In the first couple of minutes of winding through the mountains, you notice your fuel levels dropping rapidly. You have already passed all of the gas stations and are now in a very deserted part of the mountains. You quickly run out of gas after just 30 minutes. Because no one travels these roads often, there is no one around to help; so, you start off on a journey to find civilization to retrieve gas and essentials such as water and food. Unfortunately, it is too far away to walk, and as you continue trekking back down the winding mountains, you run out of energy as a result of not having water or nutrition. There is nothing left that you can do as you realize that you should have just gotten gas sooner...")
}


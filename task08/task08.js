const timeConverter = (minutes) => {
    let tempMin, tempHr;
    let hrs = Math.round(minutes / 60);
    let mins = Math.round(minutes % 60);

    if (hrs === 1) tempHr = hrs + " hour, ";
    else tempHr = hrs + " hours, ";
    
    if (mins === 1) tempMin = mins + " minute";
    else tempMin = mins + " minutes";

    return (tempHr + tempMin);
}
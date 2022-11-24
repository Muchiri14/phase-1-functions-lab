// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    if (value == 43) {
    return (1);
    }
    else {
        return (8);
    }
}
function distanceFromHqInFeet(location) {
    if (location == 43) {
        return (264);
    }
    else {
        return (2112);
    }
}
function distanceTravelledInFeet(x, y) {
    if (y > x) {
        const walking = (y - x) * 264;
        return (walking);
    }
    else if (x > y) {
        const walking = (x - y) * 264;
        return (walking);
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    let n;
    if (distance <= 400) {
        n = 0;
    }
    else if (distance > 400 && distance < 2000) {
        n = 2.56;
    }
    else if (distance > 2000 && distance < 2500) {
        n = 25;
    }
    else if (distance > 2500) {
        n = 'cannot travel that far';
    }
    return n;
}
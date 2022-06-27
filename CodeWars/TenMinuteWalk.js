function isValidWalk(walk) {
    //insert brilliant code here
    var myList = []
    var distanceWalked = 0
    walk.forEach(element => {
        myList.push(element)
        switch (element) {
            case 'n':
                distanceWalked += 1;
                break;
            case 's':
                distanceWalked -= 1;
                break;
            case 'e':
                distanceWalked += 2;
                break;
            case 'w':
                distanceWalked -= 2;
                break;
        }
    })
    if (distanceWalked === 0 && myList.length === 10) {
        return true
    } else {
        return false
    }
}

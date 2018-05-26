class Player {
  playTurn(warrior) {
    const space = warrior.feel();
    const locations = space.getLocation();
    if (!space.isEmpty() && !space.isStairs()) {
      warrior.attack();
    } else {
      warrior.walk();
    }
  }
}

/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  newColor: function (color) {
    this.color = color;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("old left " + backpack.strapLength.left);

backpack.newStrapLength(20, 22);

console.log("new left " + backpack.strapLength.left);

console.log("old color " + backpack.color);
backpack.newColor("asdf");
console.log("new color " + backpack.color);

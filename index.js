const flavors = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
function countFroyoFlavors(flavors) {
  // Split the input string into an array of individual flavors

  const flavorsArray = flavors.split(",");

  // Initialize an empty object to store the count of each flavor
  const flavorCount = {};

  // Loop through the flavors array and count occurrences of each flavor
  flavorsArray.forEach((flavor) => {
    // Trim any whitespace around the flavor
    flavor = flavor.trim();
    // Increment the count for the current flavor in the flavorCount object
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });

  // Display the counts in the browser console as a table
  console.table(flavorCount);
}
countFroyoFlavors(flavors);

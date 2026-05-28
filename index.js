const nameToGreet = process.env.INPUT_WHO_TO_GREET || "AldiCitizen";
console.log(`========================================`);
console.log(`Hello ${nameToGreet}! Welcome to Lecture 3 Custom Actions.`);
console.log(`Execution Timestamp: ${new Date().toTimeString()}`);
console.log(`========================================`);

const core = require("@actions/core");

try {
  // Get input from workflow
  const name = core.getInput("name");
  
  // Generate a greeting message
  const greeting = `Hello, ${name}! Welcome to GitHub Actions!`;
  
  // Set output
  core.setOutput("greeting", greeting);
  
  // Log the message
  console.log(greeting);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}

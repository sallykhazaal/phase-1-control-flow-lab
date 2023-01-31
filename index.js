function scuberGreetingForFeet(someValue) {
  let response;
  if (someValue < 400) {
    response = "This one is on me!";
  } else if (someValue >= 400 && someValue < 2000) {
    response = "That will be twenty bucks.";
  } else if (someValue >= 2000 && someValue < 2500) {
    response = "I will gladly take your thirty bucks.";
  } else {
    response = "No can do.";
  }
  return response;
}

function ternaryCheckCity(city) {
  let response2;
  response2 = city === "NYC" ? "Ok, sounds good." : "No go.";
  return response2;
}

function switchOnCharmFromTip(someTipGenerosity) {
  let response3;
  switch (someTipGenerosity) {
    case "generous":
      response3 = "Thank you so much.";
      break;
    case "not as generous":
      response3 = "Thank you.";
      break;
    default:
      response3 = "Bye.";
  }
  return response3;
}

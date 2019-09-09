export const hey = message => {
  message = message.trim();
  let lastChar = message[message.length - 1];

  if (message === "") {
    return "Fine. Be that way!";
  }

  if (
    message === message.toUpperCase() &&
    message.includes("?") &&
    message.match(/[A-Z]/)
  ) {
    return "Calm down, I know what I'm doing!";
  }

  if (lastChar === "?" && !message.match(/[//\\]/)) {
    return "Sure.";
  }

  if (message === message.toUpperCase() && message.match(/[A-Z]/)) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};

console.log(hey("Let's go make out behind the gym!"));

/////////////////////////////////////////////// text design
var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString(" Frontend Developer.")
  .pauseFor(1000)
  .deleteAll()
  .typeString(" Freelancer.")
  .pauseFor(1000)
  .deleteAll()
  .start();

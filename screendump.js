const { app, screen } = require("electron");

app.commandLine.appendSwitch("force_high_performance_gpu");

app.whenReady().then(() => {
  console.log("**************************************************");
  console.log("No of Screens:", screen.getAllDisplays().length);
  console.log("*******************LISTS**************************");
  console.log(screen.getAllDisplays());
  console.log("**************************************************");

  // const externalDisplay = displays.find((display) => {
  //   return display.bounds.x !== 0 || display.bounds.y !== 0;
  // });
});

app.on("window-all-closed", () => {
  app.quit();
});

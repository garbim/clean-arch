import "module-alias/register";
import "../../../util/module-alias";
import HapiAdapter from "@adapter/HapiAdapter";
import PomodoroController from "@controller/PomodoroController";
import Hapi from "@hapi/hapi";

const server = Hapi.server({
  port: 3001,
  host: "localhost",
});

server.route({
  method: "POST",
  path: "/pomodoros",
  handler: HapiAdapter.createPomodoro(PomodoroController.createPomodoro),
});
server.start();

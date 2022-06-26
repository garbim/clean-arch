export default class HapiAdapter {
  static createPomodoro(fn) {
    return async (req) => {
      console.log(req);
      const obj = await fn(req.payload);
      return obj;
    };
  }
}

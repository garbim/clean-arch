export default class ExpressAdapter {
  static createPomodoro(fn) {
    return async (req, res) => {
      console.log(req);
      const obj = await fn(req.body);
      res.json(obj);
    };
  }
}

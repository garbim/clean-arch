export default class ExpressAdapter {
  static createPomodoro(fn) {
    return async (req, res) => {
      console.log(req);
      const obj = await fn(req.body);
      res.status(201).json(obj);
    };
  }
  static createCustomer(fn) {
    return async (req, res) => {
      try {
        const obj = await fn(req.body);
        res.status(201).json(obj);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }
}

export type NotificationErrorProps = {
  message: string;
  context: string;
};

export default class Notification {
  private errors: NotificationErrorProps[] = [];

  addError(error: NotificationErrorProps): void {
    this.errors.push(error);
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  getErrors(): NotificationErrorProps[] {
    return this.errors;
  }

  messages(context?: string): string {
    let message = "";
    this.errors
      .filter((error) => {
        return error.context === context || context === undefined;
      })
      .forEach((error) => {
        message += `${error.context}: ${error.message},`;
      });
    return message;
  }
}

export default class MessageResponse {
  constructor(public status: number, public message: string) {
    this.status = status;
    this.message = message;
  }
}

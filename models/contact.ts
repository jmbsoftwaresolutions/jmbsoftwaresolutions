import { ObjectId } from "mongodb";

export default class Contact {
  constructor(
    public name: string,
    public message: string,
    public phone: string,
    public email: string,
    public created_at?: Date,
    public id?: ObjectId
  ) {}
}

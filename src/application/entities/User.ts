import { randomUUID } from "node:crypto"
import { Replace } from "../../Helpers/Replace"

export interface SchemaUser {
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  zipCodeId?: string
}

export class User {

  private _id: string;
  private props: SchemaUser;

  constructor(
    props: Replace<
      SchemaUser,
      {
        createdAt?: Date,
        updatedAt?: Date | undefined,
        zipCodeId?: string | null
      }
    >,
    id?: string
  ) {
    this._id = id ?? randomUUID()
    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: new Date ?? props.updatedAt,
      zipCodeId: props.zipCodeId ?? undefined
    }
  }

  get Id(): string {
    return this._id
  }

  get Name(): string {
    return this.props.name
  }

  get Email(): string {
    return this.props.email
  }

  get Password(): string {
    return this.props.password
  }

  get CreatedAt(): Date {
    return this.props.createdAt
  }

  get UpdatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  get ZipCodeId(): string | undefined | null {
    return this.props.zipCodeId
  }

  set Name(name: string) {
    this.props.name = name
  }

  set Email(email: string) {
    this.props.email = email
  }

  set Password(password: string) {
    this.props.password = password
  }

  set ZipCodeId(zipCodeId: string) {
    this.props.zipCodeId = zipCodeId
  }
}
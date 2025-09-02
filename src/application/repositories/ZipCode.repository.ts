import { ZipCode } from "../entities/ZipCode";

export interface RepositoryZipCode {
  create(code: ZipCode): Promise<void>
  update(id: string, datas: ZipCode): Promise<void>
}
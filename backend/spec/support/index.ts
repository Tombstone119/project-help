import { IReqPropErr } from "@src/routes/common";
import UserRepo from "@src/repos/UserRepo";

export interface IValidationErr {
  message: string;
  parameters: IReqPropErr[];
}

/**
 * Delete all records for unit testing.
 */
export async function cleanDatabase(): Promise<void> {
  await Promise.all([UserRepo.deleteAllUsers()]);
}

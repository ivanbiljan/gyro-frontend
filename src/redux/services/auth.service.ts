import { registerRoute } from "./auth.service.routes";
import { executeHttpPostAuthorized, executeUnauthorizedRequest } from "./services";
import { RegisterUserRequest } from "redux/models/authModels";

export async function registerUser(request: RegisterUserRequest) {
    await executeHttpPostAuthorized(registerRoute, request);
}
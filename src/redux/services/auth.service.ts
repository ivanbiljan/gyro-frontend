import { registerRoute } from "./auth.service.routes";
import { executeHttpPostAuthorized, executeUnauthorizedRequest } from "./services";
import { RegisterUserRequest } from "redux/models/authModels";

export async function registerUser(request: RegisterUserRequest) {
    const params = new URLSearchParams({ ...request });

    await executeHttpPostAuthorized(registerRoute, params);
}

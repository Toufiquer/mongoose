import express from "express";

import { controlCreateUser, controlGetUsers } from "./user.controller";
const router = express.Router();

router.get("/", controlGetUsers);
router.post("/createUser", controlCreateUser);

// export router
export default router;

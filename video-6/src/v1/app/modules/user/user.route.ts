import express from "express";

import { controlCreateUser } from "./user.controller";
const router = express.Router();

router.post("/createUser", controlCreateUser);

// export router
export default router;

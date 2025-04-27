import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("Hello nigga, you're Logged IN")
// });
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("Hello nigga, you're Logged IN & you can delete your account")
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("Hello AdminNigg, you're Logged IN & you can delete all account")
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET PARTICULAR
router.get("/:id", verifyUser, getUser); 

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;


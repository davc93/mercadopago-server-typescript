import express from "express";
import { sendEmail } from "../../mail";
import controller from "./index";

const router = express.Router();
router.post("/", async (req, res, next) => {
    try {
        const response = await controller.upsert(req)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});


export default router;
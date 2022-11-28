import express from "express";
import controller from "./index";


const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const response = await controller.upsert(req.body)
        res.json(response)
        
    } catch (error) {
        next(error)
    }
});

export default router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weatherService_1 = require("../services/weatherService");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }
    try {
        const data = await (0, weatherService_1.getWeather)(city);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch weather" });
    }
});
exports.default = router;

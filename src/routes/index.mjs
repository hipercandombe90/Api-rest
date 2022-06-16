import { Router } from "express";
const router = Router();

// envir htlm sobre el archivo inden.ejs, title pasa valores a ejs
router.get("/", (req, res) => res.render("index.ejs", {title: 'first website with Node'}));

router.get("/about", (req, res) => res.render("about.ejs", {title: 'about me'}));

router.get("/contact", (req, res) => res.render("contact.ejs", {title:'contact me'}));

export default router

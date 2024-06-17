const express = require("express")

const router = exprss.Router()

router.get("/admin", adminRouter)
router.get("/users", usersRouter)
router.get("/products", productsRouter)

module.exports = router

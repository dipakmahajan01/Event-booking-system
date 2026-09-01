const express = require("express")

const authRoutes = express()

authRoutes.post('/signup',signupHandler)
authRoutes.post('/login', loginHandler)
authRoutes.post('/verify-otp', verifyHandler)


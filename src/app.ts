import express, { NextFunction, Request, Response } from "express";
import walletRoutes from "./wallet/wallet-api";

const app = express();
export const PORT = process.env.port || 4000;

// API endpoints
app.use(`/wallet`, walletRoutes);

// Error handling middleware
app.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
  const { status } = error;
  const errorCode = status || 500;
  return res.status(errorCode).json({ errorMessage: error.message });
});

export default app;

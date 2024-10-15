import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    throw UnauthenticatedError("invalid token");
  }
  return decoded;
};

import  Jwt  from "jsonwebtoken";

//Funtion to generate a token for a user
export const generateToken = (userId) => {
    const token = Jwt.sign({ userId }, process.env.JWT_SECRET);
    return token;
}
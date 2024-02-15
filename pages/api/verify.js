import { responseTypes } from "@/utils/types";
import axios from "axios";

const verifyRecaptcha = async token => {
  const secretKey = process.env.RECAPTHA_SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  return await axios.post(verificationUrl);
};

export default async function handler(req,res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const token = req.body.token;

    const response = await verifyRecaptcha(token);
    if (response.data.success && response.data.score >= 0.5) {
      return res
        .status(200)
        .json({ status: "Success", message: "Thank you for contacting me." });
    } else {
      return res.json({
        status: "Failed",
        message: "Something went wrong, please try again!!!",
      });
    }
  } catch (error) {
    console.log("ERRRRROr", error);
    res.json({
      status: "Failed",
      message: "Something went wrong, please try again!!!",
    });
  }
}
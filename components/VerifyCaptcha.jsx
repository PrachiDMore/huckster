import axios from "axios"

export async function verifyCaptcha(token) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6Leol3MpAAAAACnvPm5-cAW2eO4ecZUFBR6wx9Oq&response=${token}`
  )
  if (res.data.success) {
    return "success!"
  } else {
    throw new Error("Failed Captcha")
  }
}
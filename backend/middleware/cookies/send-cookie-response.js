export function sendCookieResponse(
  res,
  {
    cookieName = "cookieName",
    cookieValue = "",
    maxAge = 900000,
    sameSite = "Lax",
    path = "/",
    secure = false,
    httpOnly = false,
  },
  status = 200
) {
  let randomNumber = Math.random().toString();
  randomNumber = randomNumber.substring(2, randomNumber.length);
  console.log("cookie created successfully");
  return res
    .cookie(cookieName, cookieValue || randomNumber, {
      maxAge,
      sameSite,
      path,
      secure,
      httpOnly,
    })
    .sendStatus(status);
}

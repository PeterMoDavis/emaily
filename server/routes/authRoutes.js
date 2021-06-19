const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};

//production link mongodb+srv://pmodavisproduction:<password>@cluster0.1hxim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//Production Client ID : 926580133386-f7vov1f58ibs798tbe163pibf1sedm7m.apps.googleusercontent.com
//Production server Secres : bKB2dfUYHzpB8Hafjz00pit-

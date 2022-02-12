import CONFIG from "../configs/index.js";

const checkHost = (req, res, next) => {
  if (CONFIG.NODE_ENV === "development") return next();
  if (req.headers.host === "localhost:8080") {
    next();
  } else {
    res.status(403).send({
      status: 403,
      message: "Forbidden",
    });
  }
};

export default checkHost;

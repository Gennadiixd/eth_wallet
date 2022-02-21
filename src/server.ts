import { connectDB } from "../db/connection";
import app, { PORT } from "./app";

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  })
  .catch((error) => {
    console.error(error);
  });

import logger from "jet-logger";

import ENV from "@src/common/ENV";
import server from "./server_old";

/******************************************************************************
                                  Run
******************************************************************************/

const SERVER_START_MSG =
  "Express server started on port: " + ENV.Port.toString();

server.listen(ENV.Port, () => logger.info(SERVER_START_MSG));

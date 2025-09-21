// import { serve } from "inngest/next";
// import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     syncUserCreation,
//     syncUserUpdation,
//     syncUserDeletion
//   ],
// });

// src/app/api/inngest/route.js
// src/app/api/inngest/route.js
// src/app/api/inngest/route.js
// src/app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "../../../config/inggest"; // CORRECTED to a relative path

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});
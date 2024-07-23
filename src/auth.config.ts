import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";

import type { Provider } from "next-auth/providers";

const providers: Provider[] = [Google, Facebook];

export default {
  providers,
};

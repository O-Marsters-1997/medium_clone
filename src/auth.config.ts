import Google from "next-auth/providers/google";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [Google];

export default {
  providers,
};

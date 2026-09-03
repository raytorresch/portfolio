import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const [common, bitacora] = await Promise.all([
    import(`../messages/${locale}.json`),
    import(`../messages/pages/bitacora/${locale}.json`),
  ]);

  return {
    locale,
    messages: {
      ...common.default,
      bitacora: bitacora.default,
    },
  };
});

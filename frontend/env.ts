const env = {
  web_url: process.env.NEXT_PUBLIC_WEB_URL || "$NEXT_PUBLIC_WEB_URL$",
  google_verification:
    process.env.GOOGLE_SITE_VERIFICATION || "$GOOGLE_SITE_VERIFICATION$",
  yandex_verification:
    process.env.YANDEX_SITE_VERIFICATION || "$YANDEX_SITE_VERIFICATION$",
};

export default env;

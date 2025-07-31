export const Config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  LOGIN_WITH_ADMIN: {
    EMAIL: process.env.NEXT_PUBLIC_ADMIN_EMAIL!,
    PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD!,
  },
  LOGIN_WITH_GUEST: {
    EMAIL: process.env.NEXT_PUBLIC_GUEST_EMAIL!,
    PASSWORD: process.env.NEXT_PUBLIC_GUEST_PASSWORD!,
  },
};

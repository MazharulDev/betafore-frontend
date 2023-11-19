export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL as string;
};

export const stripePubKey = (): string => {
  return process.env.NEXT_PUBLIC_API_STRIPE_PUB_KEY as string;
};

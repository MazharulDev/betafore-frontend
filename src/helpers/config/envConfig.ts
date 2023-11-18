export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
};

export const getImgbbAPI = (): string => {
  return process.env.NEXT_PUBLIC_API_IMGBB_TOKEN as string;
};

export const stripePubKey = (): string => {
  return process.env.NEXT_PUBLIC_API_STRIPE_PUB_KEY as string;
};

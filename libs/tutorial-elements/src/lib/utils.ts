export const getAvatarFallback = (name: string) => name.substring(0, 1);

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};

export const formatNumber = (num: number, currency?: string) => {
  return Intl.NumberFormat(undefined, {
    maximumFractionDigits: 3,
    currency: currency,
    style: currency ? 'currency' : undefined,
  }).format(num);
};

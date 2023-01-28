export const openWhatsApp = (phone: string) => {
  window.open(`https://wa.me/${phone.replace(/[^0-9]/gi, "")}`);
};

export const openTelegram = (url: string, accName?: string) => {
  window.open(url || `https://t.me/${accName}`);
};

export const openTelephone = (number: number) => {
  window.open(`tel:${number}`);
};

export const openLink = (link: string) => {
  window.open(link, "_blink");
};

export const getTodayString = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? "0" : ""}${
    today.getMonth() + 1
  }-${today.getDate()}`;
};

export const openWhatsApp = (phone: string) => {
  window.open(`https://wa.me/${phone.replace(/[^0-9]/gi, "")}`, "_blank");
};

export const openLink = (link: string) => {
  window.open(link, "_blink");
};

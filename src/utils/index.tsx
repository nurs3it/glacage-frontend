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

export const getWhatsAppMessage = (values, totalPrice, id, cart) => {
  return `*НОВЫЙ ЗАКАЗ 🔥*
 
☎️ _Номер телефона_: ${values.phone || ""}
😇 _Имя получателя_: ${values.firstname} ${values.secondname || ""}
 
🏠 _Адресс получателя_: ${values.address || ""}
🗓 _Дата заказа_: ${values.date || ""}
⏰ _На время_: ${values.time || ""}
 
📦 _Вид заказа_: ${values.deliveryType == "PICKUP" ? "Самовывоз" : "Доставка"}
 
📪 _Почта получателя_: ${values.email || ""}
📝 _Комментарий к заказу_: ${values.comment || ""}
 
🧁 _Список продуктов_:\n${cart
    .map((p, i) => i + 1 + ". " + p.stock.name + " - " + p.count)
    .join("\n")}
 
Пройдите по ссылке чтобы посмотреть детали заказа: https://glacage.onrender.com/admin/content-manager/collectionType/api::zakazy.zakazy/${id}
 
Итоговая сумма *${totalPrice}*`;
};

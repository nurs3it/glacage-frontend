import { useContacts } from "hooks/useContacts";

import { openLink, openTelegram, openTelephone, openWhatsApp } from "src/utils";

import WhatsApp from "assets/svg/whatsAppBlack.svg";
import Telegram from "assets/svg/telegram2.svg";
import Phone from "assets/svg/phoneBlack.svg";
import Instagram from "assets/svg/instagramFill.svg";

import { Item } from "components/UI/IList";

const ContactDrawerMenus = () => {
  const { number, telegram, instagram } = useContacts();

  return (
    <>
      {number && (
        <Item
          onClick={() => openWhatsApp(number)}
          iconSize={18}
          icon={WhatsApp}
          text="WhatsApp"
        />
      )}
      {telegram && (
        <Item
          onClick={() => openTelegram(telegram)}
          iconSize={18}
          icon={Telegram}
          text="Telegram"
        />
      )}
      {instagram && (
        <Item
          onClick={() => openLink(instagram)}
          icon={Instagram}
          text="Instagram"
        />
      )}
      {number && (
        <Item
          onClick={() => openTelephone(number)}
          iconSize={18}
          icon={Phone}
          text="Тел. звонок"
        />
      )}
    </>
  );
};

export default ContactDrawerMenus;

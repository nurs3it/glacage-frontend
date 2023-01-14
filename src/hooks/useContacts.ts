import { useSelector } from "react-redux";

const useContacts = () => {
  const { contacts } = useSelector((state) => state["about"]);

  return {
    number: contacts.number,
    instagram: contacts.instagram,
    facebook: contacts.facebook,
    twitter: contacts.twitter,
  };
};

export { useContacts };

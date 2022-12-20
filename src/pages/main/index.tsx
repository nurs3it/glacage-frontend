import IContainer from "layouts/container";
import AppLayout from "layouts/app";

import Banner from "components/Banner";
import Block from "components/Block";
import About from "components/About";
import Benefits from "components/Benefits";
import PaymentDelivery from "components/PaymentDelivery";
import Catalog from "components/Catalog";

const MainPage = () => {
  return (
    <AppLayout>
      <Banner />
      <IContainer>
        <Block id="about" title="О нас">
          <About />
        </Block>
        <Block id="catalog" title="Каталог">
          <Catalog />
        </Block>
        <Block id="benefits" title="Наши преимущества">
          <Benefits />
        </Block>
        <Block id="payment" title="Оплата и доставка">
          <PaymentDelivery />
        </Block>
      </IContainer>
    </AppLayout>
  );
};

export default MainPage;

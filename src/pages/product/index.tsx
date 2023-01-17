import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import ProductDetails from "components/ProductDetails";

import { useBreakpoints } from "hooks/useBreakpoints";

const ProductPage = () => {
  const { mobile } = useBreakpoints();

  if (mobile) return <ProductDetails />;
  return (
    <AppLayout>
      <IContainer>
        <ProductDetails />
      </IContainer>
    </AppLayout>
  );
};

export default ProductPage;

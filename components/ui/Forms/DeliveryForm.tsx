import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Address } from "../../../interfaces";
import { AddressCard } from "../Cards";
import { SelectAddressInput } from "../Inputs";

interface OrderInfo {
  deliveryType: string;
  clientName: string;
  storeId: number;
  addressId: string | undefined;
}

interface Props {
  addresses: Address[];
  orderInfo: OrderInfo;
  setOrderInfo: Dispatch<SetStateAction<OrderInfo>>;
}

export const DeliveryForm: FC<Props> = ({
  addresses,
  orderInfo,
  setOrderInfo,
}) => {
  const handleAddressChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOrderInfo((currentValue) => ({
      ...currentValue,
      addressId: event.target.value,
    }));
  };

  const address = addresses.find(
    (address) => address.id === orderInfo.addressId
  )!;

  return (
    <>
      <p>Selecciona tu dirección:</p>
      <SelectAddressInput
        setValue={handleAddressChange}
        error={false}
        value={orderInfo.addressId}
        label="Dirección"
        options={addresses}
      />
      <AddressCard address={address} />
    </>
  );
};

export default DeliveryForm;

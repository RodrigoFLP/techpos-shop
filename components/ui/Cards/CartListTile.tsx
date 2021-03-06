import Image from "next/image";
import { FC } from "react";
import { ButtonIcon } from "../Buttons";
import { Plus, Minus } from "react-feather";
import { OrderItemState } from "../../../interfaces";
import { incrementItemQuantity, remove } from "../../../store";
import { useAppDispatch } from "../../../store/hooks";

interface Props {
  order: OrderItemState;
  src: string;
}

export const CartListTile: FC<Props> = ({ order, src }) => {
  const dispatch = useAppDispatch();

  const handleMinusClick = () => {
    dispatch(remove(order.orderItemId));
  };

  const handlePlusClick = () => {
    dispatch(incrementItemQuantity(order.orderItemId));
  };

  return (
    // <Link href={`/menu/${title}`} passHref>
    <div
      className="w-full h-28 sm:h-32 flex rounded-2xl bg-white 
        shadow-sm overflow-hidden space-x-4 transition-all border p-2 relative"
    >
      <div
        id="image"
        className="bg-slate-50 rounded-xl relative overflow-hidden aspect-square w-28 h-28 flex-shrink hidden sm:block"
      >
        <Image
          src={src}
          layout="fill"
          alt={order.productName}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col pr-4 py-2 justify-between flex-1">
        <div className="flex flex-col">
          <div className="font-semibold flex-shrink">{order.productName}</div>
          <span className="text-gray-600 text-xs font-medium">
            {order.portion.name}
          </span>
        </div>
        <div className="flex whitespace-nowrap  w-full scroll flex-wrap">
          {order.tagsGroups.map((tagGroup) =>
            tagGroup.tags.map((tag) => (
              <div
                key={tag.value}
                className="mr-1 text-xs font-semibold bg-primary px-1 sm:p-1 sm:px-2 text-white rounded-xl"
              >
                {tag.value}
              </div>
            ))
          )}
        </div>
        <div className="font-extrabold">
          <span className="text-sm">$</span>
          {order.unitPrice.toFixed(2)} x {order.quantity}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between right-0 top-0 p-2 absolute h-full">
        <ButtonIcon style={true} handleClick={handlePlusClick}>
          <Plus color="white" />
        </ButtonIcon>
        <span className="font-bold text-sm">{order.quantity}</span>
        <ButtonIcon handleClick={handleMinusClick}>
          <Minus />
        </ButtonIcon>
      </div>
    </div>
    // </Link>
  );
};

export default CartListTile;

import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  availableSize: Size[]; // ["SX", "M", "L" , "XL", "XXL"]
}

export const SizeSelector = ({ selectedSize, availableSize }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas Disponibles</h3>
      <div className="flex">
        {availableSize.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-xl", {
              underline: size === selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

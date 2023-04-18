import { Property } from "../../types";
import { ReactComponent as BedRoomIcon } from "../../assets/bed.svg";
import { ReactComponent as BathRoomIcon } from "../../assets/bath.svg";
import { ReactComponent as SizeIcon } from "../../assets/house-size.svg";
import { usePropertyModalContext } from "../../hooks/use-property-modal-context";
import { usePropertyContext } from "../../hooks";
import { useMemo } from "react";

interface Props {
  property: Property;
}

export const PropertyItem = ({ property }: Props) => {
  const {
    id,
    display_image,
    prices: { base_price },
    address: { full: fullAddress },
    total_bedrooms,
    total_bathrooms,
    total_occupancy,
    listInformation,
  } = property;
  const { tax, cost, area } = listInformation || {};
  const { setShow, setPropertyId } = usePropertyModalContext();
  const { selectedProperties } = usePropertyContext();

  const isListed = useMemo(() => {
    return selectedProperties.find((item) => item.id === id);
  }, [selectedProperties, id]);

  const onClick = () => {
    if (isListed) return;
    setShow(true);
    setPropertyId(id);
  };

  return (
    <div
      className={`shadow-md hover:cursor-pointer hover:shadow-xl ${
        isListed ? "border border-2 border-pink-500" : ""
      }`}
      onClick={onClick}
    >
      <img className="h-auto" src={display_image} alt="" />
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <b className="text-lg">
            $ {`${cost || base_price}${tax ? ", " + tax + "%" : ""}`}
          </b>
          <div className="flex gap-4">
            <b>4.5</b>
          </div>
        </div>
        <p className="text-md my-2 text-left text-gray-500">
          {area || fullAddress}
        </p>
        <div className="text-md flex gap-6 text-gray-500">
          <div className="flex items-center gap-1">
            <BedRoomIcon className="h-4 w-4" />
            <span>{total_bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <BathRoomIcon className="h-4 w-4" />
            <span>{total_bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <SizeIcon className="h-4 w-4" />
            <span>{total_occupancy} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

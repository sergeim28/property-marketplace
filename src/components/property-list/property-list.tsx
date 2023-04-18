import { Property } from "../../types";
import { PropertyItem } from "../property-item";
import { PropertyModal } from "../property-modal";

interface Props {
  properties: Property[];
}

export const PropertyList = ({ properties }: Props) => {
  if (properties.length === 0)
    return <h1 className="mt-10 text-4xl">No properties to show</h1>;
  return (
    <div className="relative grid grid-cols-1 gap-3 px-4">
      <div className="pt-10 text-4xl">Properties</div>
      <div className="block">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {properties.map((property, id) => (
            <PropertyItem key={id} property={property} />
          ))}
        </div>
      </div>
      <PropertyModal />
    </div>
  );
};

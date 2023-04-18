import { createContext, PropsWithChildren, useCallback, useState } from "react";

import { Property } from "../types";
import PropertyData from "../data/property.json";

type PropertyContextType = {
  properties: Property[];
  setProperties: (_: Property[]) => void;
  selectedProperties: Property[];
  setSelectedProperties: (_: Property[]) => void;
  selectedTab: number;
  setSelectedTab: (_: number) => void;
  listProperty: (_: {
    propertyId: number;
    cost: number;
    tax: number;
    area: string;
  }) => void;
};

const defaultValue = {
  properties: [],
  setProperties: ([]) => {},
  selectedProperties: [],
  setSelectedProperties: ([]) => {},
  selectedTab: 0,
  setSelectedTab: (_: number) => {},
  listProperty: (_: {
    propertyId: number;
    cost: number;
    tax: number;
    area: string;
  }) => {},
};

export const PropertyContext = createContext<PropertyContextType>(defaultValue);

export const PropertyContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [properties, setProperties] = useState<Property[]>(
    PropertyData.rows as unknown as Property[]
  );
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const listProperty = useCallback(
    ({
      propertyId,
      cost,
      tax,
      area,
    }: {
      propertyId: number;
      cost: number;
      tax: number;
      area: string;
    }) => {
      const selectedProperty = properties.find(
        (property) => property.id === propertyId
      );
      if (!selectedProperty) return;
      setSelectedProperties([
        ...selectedProperties,
        { ...selectedProperty, listInformation: { cost, tax, area } },
      ]);
    },

    [selectedProperties, properties]
  );

  return (
    <PropertyContext.Provider
      value={{
        properties,
        setProperties,
        selectedProperties,
        setSelectedProperties,
        selectedTab,
        setSelectedTab,
        listProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

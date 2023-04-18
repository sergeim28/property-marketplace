import { createContext, PropsWithChildren, useState } from "react";

type PropertyModalContextType = {
  show: boolean;
  setShow: (_: boolean) => void;
  propertyId: number;
  setPropertyId: (_: number) => void;
};

const defaultValue = {
  show: false,
  setShow: () => {},
  propertyId: -1,
  setPropertyId: () => {},
};

export const PropertyModalContext =
  createContext<PropertyModalContextType>(defaultValue);

export const PropertyModalContextProvider = ({
  children,
}: PropsWithChildren<{}>) => {
  const [show, setShow] = useState<boolean>(false);
  const [propertyId, setPropertyId] = useState<number>(-1);
  return (
    <PropertyModalContext.Provider
      value={{ show, setShow, propertyId, setPropertyId }}
    >
      {children}
    </PropertyModalContext.Provider>
  );
};

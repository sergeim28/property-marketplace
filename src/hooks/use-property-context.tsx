import { useContext } from "react";

import { PropertyContext } from "../services/property-context";

export const usePropertyContext = () => useContext(PropertyContext);

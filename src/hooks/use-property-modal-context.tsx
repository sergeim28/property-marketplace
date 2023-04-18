import { useContext } from "react";

import { PropertyModalContext } from "../services/property-modal-context";

export const usePropertyModalContext = () => useContext(PropertyModalContext);

import { useState } from "react";
import { usePropertyContext, usePropertyModalContext } from "../../hooks";
import { Modal } from "../common/modal";

export const PropertyModal = () => {
  const { show, setShow, propertyId, setPropertyId } =
    usePropertyModalContext();
  const { listProperty } = usePropertyContext();
  const [cost, setCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [area, setArea] = useState("");
  const onClose = () => {
    setShow(false);
    setPropertyId(-1);
  };
  const clearForm = () => {
    setCost(0);
    setTax(0);
    setArea("");
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    listProperty({ propertyId, cost, tax, area });
    clearForm();
    onClose();
  };
  return (
    <Modal show={show} onClose={() => onClose()}>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Input additional information and list
        </h3>
        <form className="space-y-6" action="#" onSubmit={onSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Total cost
            </label>
            <input
              value={cost}
              onChange={(e: any) => setCost(e.target.value)}
              type="number"
              name="cost"
              id="cost"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="12,213"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Tax
            </label>
            <input
              value={tax}
              onChange={(e: any) => setTax(e.target.value)}
              type="number"
              name="tax"
              id="tax"
              placeholder="0.18"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Area of property
            </label>
            <input
              value={area}
              onChange={(e: any) => setArea(e.target.value)}
              type="text"
              name="area"
              id="area"
              placeholder="Windward House, 99a Cooper Hill, Holetown, Barbados"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            List this property
          </button>
        </form>
      </div>
    </Modal>
  );
};

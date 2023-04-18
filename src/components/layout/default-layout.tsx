import { PropsWithChildren } from "react";
import { usePropertyContext } from "../../hooks";

const tabs = ["All Properties", "Listed Properties"];

interface DefaultLayoutProps {}
export const DefaultLayout = ({
  children,
}: PropsWithChildren<DefaultLayoutProps>) => {
  const { selectedTab, setSelectedTab } = usePropertyContext();
  return (
    <div className="flex-cols flex h-screen w-full text-center">
      <div className="hidden h-full w-[250px] shrink-0 flex-col bg-slate-200 p-4 md:flex">
        <div className="mb-auto mt-6 grid grid-cols-1 justify-stretch gap-3 py-5">
          {tabs.map((tab, index) => (
            <div
              className={`rounded-md px-4 py-3 shadow-md hover:bg-gray-500 hover:shadow-xl ${
                index === selectedTab ? "bg-gray-400" : "bg-slate-100"
              }`}
              key={index}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div>FOOTER</div>
      </div>
      <div className="mx-auto h-full w-full overflow-auto">{children}</div>
    </div>
  );
};

import { usePropertyContext } from "./hooks";
import { DefaultLayout } from "./components/layout";
import { PropertyList } from "./components/property-list";

function App() {
  const { properties, selectedProperties, selectedTab } = usePropertyContext();
  return (
    <DefaultLayout>
      <PropertyList
        properties={selectedTab === 0 ? properties : selectedProperties}
      />
    </DefaultLayout>
  );
}

export default App;

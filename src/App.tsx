import { CollapsibleWrapper } from "./Collapse";

function App() {
  return (
    <div className="App h-screen flex">
      <div className="bg-amber-300 w-navbar z-10 min-w-navbar">navbar</div>
      <CollapsibleWrapper
        collapsingDirection="closeToLeft"
        className="bg-emerald-300"
      >
        <div className="pr-[16px]">collapse panel 1</div>
      </CollapsibleWrapper>
      <div className="flex-1">
        <div className="bg-cyan-300 h-[60%]">Spatial Graph</div>
        <div className="bg-rose-300 h-[40%]">Time/Day Graph</div>
      </div>
      <CollapsibleWrapper
        collapsingDirection="closeToRight"
        className="bg-emerald-300"
      >
        <div className="pl-[16px]">collapse panel 2</div>
      </CollapsibleWrapper>
    </div>
  );
}

export default App;

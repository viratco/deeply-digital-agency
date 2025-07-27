import { useState } from "react";
import { MaskContainer } from "./ui/svg-mask-effect";
import { MultiStepLoader } from "./ui/multi-step-loader";
import { Button } from "./ui/button";

const loadingStates = [
  { text: "Discovering Your Vision" },
  { text: "Crafting the Blueprint" },
  { text: "Building with Precision" },
  { text: "Refining for Perfection" },
  { text: "Launching Your Legacy" },
];

const MaskSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-center text-4xl font-bold">
              Why do brands choose <span className="text-blue-500">Deeply</span> for their digital growth?
            </p>
          }
          className="h-[40rem]"
        >
          <p className="max-w-4xl mx-auto text-center text-4xl font-bold">
            We go deeper than just websites. We build <span className="text-blue-500">brand legacies</span> with a focus on <span className="text-blue-500">sustainable growth</span> and measurable results.
          </p>
        </MaskContainer>
      </div>
      <Button onClick={() => setLoading(true)} variant="outline" size="lg" className="-mt-20 z-10">
        See Our Process
      </Button>
      <MultiStepLoader loadingStates={loadingStates} loading={loading} setLoading={setLoading} duration={1500} />
    </div>
  );
};

export default MaskSection;

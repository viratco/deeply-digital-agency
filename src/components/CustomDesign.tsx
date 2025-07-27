import { ContainerScroll } from "./ui/container-scroll-animation";
import { ContainerTextFlip } from "./ui/container-text-flip";
import brandVid from "@/assets/brand-vid.mp4";

const CustomDesign = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-4xl font-semibold text-white">
            We provide <ContainerTextFlip words={["custom", "innovative", "modern"]} interval={2000} /> design
          </div>
        }
      >
        <video
          src={brandVid}
          height={720}
          width={1400}
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        />
      </ContainerScroll>

    </div>
  );
};

export default CustomDesign;

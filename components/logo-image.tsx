import Image from "next/image";

export const DarkLogoImage = () => {
  return (
    <Image
      src={"/logos/RobotIcon3.png"}
      // src={"/logos/techsupport3.png"}
      width={100}
      height={80}
      alt="Tech Support Logo"
      className="flex items-center gap-2 leading-0"
    />
  );
};

export const LightLogoImage = () => {
  return (
    <Image
      src={"/logos/RobotIcon1.png"}
      // src={"/logos/techsupport1.png"}
      width={100}
      height={80}
      alt="Tech Support Logo"
      className="flex items-center gap-2 leading-0"
    />
  );
};

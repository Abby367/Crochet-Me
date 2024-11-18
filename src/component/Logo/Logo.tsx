import logo from "../Logo/CrochetMe.png";

export const Logo = ({ size }: { size: number }) => {
  return (
    <img className="object-fit" src={logo} width={size} height={size} alt="" />
  );
};

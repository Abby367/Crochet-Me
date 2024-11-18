import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Logo } from "../Logo/Logo";
export const NavBar = () => {
  const { isSmallScreen } = useWindowSize();

  return (
    <div className="bg-white h-16 flex items-center">
      <Link to="/">
        <Logo size={110} />
      </Link>
    </div>
  );
};

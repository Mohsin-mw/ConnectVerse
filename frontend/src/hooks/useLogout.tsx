// TODO: IMPROVE THIS LATER
import { useEffect } from "react";

const useLogout = () => {
  useEffect(() => {
    localStorage.removeItem("user");
  });
};

export default useLogout;

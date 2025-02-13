import { ReactNode, useEffect, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default Layout;

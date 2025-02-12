import { useState, useEffect } from "react";

export interface ErrorProps {
  statusCode?: number;
}

const HydrationCheck = ({ statusCode }: ErrorProps) => {
  const [isHydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return (
    <div>
      <h1>Where have you gone, Joe DiMaggio?</h1>
      <p>Break on through to the Wildcard side.</p>
      <code>Error {statusCode}</code>
    </div>
  );
};

export default HydrationCheck;

import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

export function withLocation<T>(WrappedComponent: React.ComponentType<T>) {
  const Wrapper: React.FC<T> = (props) => {
    const location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", path: location.pathname });
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
}

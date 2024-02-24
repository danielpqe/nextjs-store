"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
    // Put the datadog code here to send error information
  });

  return (
    <div>
      <h2>Ah ocurrido un error!</h2>
      <button onClick={reset}>Intentar otra vez</button>
      <p>{error.message}</p>
    </div>
  );
}

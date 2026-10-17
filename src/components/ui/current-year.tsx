"use client";

import { useEffect, useState } from "react";

export default function CurrentYear({ initialYear }: { initialYear: number }) {
  const [year, setYear] = useState(initialYear);
  useEffect(() => {
    /* eslint-disable-next-line react-hooks/set-state-in-effect -- Refresh the static export's year after hydration. */
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}

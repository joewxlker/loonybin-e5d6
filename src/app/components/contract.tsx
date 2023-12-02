"use client";

import { useState, type FC, useCallback } from "react";

export const Contract: FC<{ contractAddress: string }> = ({
  contractAddress,
}) => {
  const [copied, setCopied] = useState<boolean>();
  const copy = useCallback(() => {
    if (!copied) {
      void navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [setCopied, contractAddress, copied]);
  return (
    <div className="flex w-full items-center justify-center">
      <button className="hidden md:block lg:block xl:block" onClick={copy}>
        <h2>Contract : </h2>
        <p
          className={`${
            copied ? "text-lime-500" : "text-t2"
          } text-center font-body text-4xl transition-colors duration-300`}
        >
          {contractAddress}
        </p>
      </button>
      <button className="block md:hidden lg:hidden xl:hidden" onClick={copy}>
        <h2>Contract : </h2>
        <p
          className={`${
            copied ? "text-lime-500" : "text-t2"
          } block text-center font-body text-3xl transition-colors duration-300`}
        >
          {contractAddress.slice(0, 10)}...
          {contractAddress.slice(36, 50)}
        </p>
      </button>
    </div>
  );
};

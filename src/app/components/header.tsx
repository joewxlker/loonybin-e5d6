"use client";

import { useState, type FC, useCallback } from "react";
import { useSectionElements } from "../hooks/pageSections.hook";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { type ProjectInfo } from "~/app/models/project.model";

export const Header: FC<{ layout: string; config: ProjectInfo }> = ({
  layout,
  config,
}) => {
  const [menu, setMenu] = useState<boolean>(false);
  const sections = useSectionElements();
  const toggleMenu = useCallback(() => setMenu((prev) => !prev), [setMenu]);
  const router = useRouter();
  const navigate = useCallback(
    (href: string) => {
      router.push(href);
      setMenu(false);
    },
    [router, setMenu],
  );
  return (
    <div
      className={`${layout} fixed left-0 right-0 top-0 flex flex-row py-2 z-50`}
    >
      <h3 className="text-3xl font-heading text-t1">okay = ticker</h3>
    </div>
  );
};

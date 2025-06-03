"use client";

import React, { useState } from "react";

import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MFiltreNaProfilAutre } from "@/app/components/ui/FiltreNaProfilAutre/MFiltreNaProfilAutre";

import styles from "./MFiltreRecherche.module.css"; 

export function MFiltreRecherche({ data, onFilter }) 
   {
  return (
    <div className={styles["filtre-recherche-container"]}>
      <MFiltreNaProfilAutre data={data} onFilter={onFilter} />
      <MSearchBar />
    </div>
  );
}

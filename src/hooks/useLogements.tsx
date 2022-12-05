import type {ILogement}      from "../models/logement/ILogement";
import {CustomData, useData} from "./useData";
import React                 from "react";

export type ILogementsData = CustomData<ILogement[], "logements">
export function useLogements(): ILogementsData {
  const {data, ...state} = useData<ILogement[]>("/api/logements.json");
  return {
    ...state,
    logements: data,
  };
}

export type ILogementData = CustomData<ILogement, "logement">
export function useLogement(id?: ILogement["id"]): ILogementData {
  const logements = useLogements();

  const foundLogement = logements.logements?.find(logement => logement.id === id);

  React.useEffect(() => {
    if (!logements.loading && id && !foundLogement) {
      throw new Error(`Logement '${id}' not found`);
    }
  }, [foundLogement, id, logements.loading]);

  return {
    logement: foundLogement,
    loading: logements.loading,
    error: logements.error,
  };
}

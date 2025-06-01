import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  priority: string;
  setPriority: (p: string) => void;
  source: string;
  setSource: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [priority, setPriority] = useState("all");
  const [source, setSource] = useState("all");
  const [category, setCategory] = useState("all");

  return (
    <FilterContext.Provider value={{ priority, setPriority, source, setSource, category, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used within a FilterProvider");
  return context;
};

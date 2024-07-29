import { create } from 'zustand';

type ContentAccordion = {
  allKeys: Set<string>;
  selectedKeys: Set<string>;
  setAllKeys: (keys: Set<string>) => void;
  setSelectedKeys: (keys: Set<string>) => void;
  collapseAll: () => void;
  expandAll: () => void;
};

export const useContentAccordion = create<ContentAccordion>()((set) => ({
  allKeys: new Set(['0']),
  selectedKeys: new Set(['0']),
  setAllKeys: (keys) => {
    set({ allKeys: keys });
  },
  setSelectedKeys: (keys) => {
    set({ selectedKeys: keys });
  },
  collapseAll: () => {
    set({ selectedKeys: new Set() });
  },
  expandAll: () => {
    set((state) => ({ selectedKeys: state.allKeys }));
  },
}));

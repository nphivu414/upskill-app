import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs';

export const useContentSectionQueryState = () => {
  const [selectedSections, setSelectedSections] = useQueryState(
    'sections',
    parseAsArrayOf(parseAsString).withDefault(['1'])
  );

  return {
    selectedSections,
    setSelectedSections,
  };
};

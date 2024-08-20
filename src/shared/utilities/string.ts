export const toKebabCase = (inputString: string) => {
  // Remove all symbols except hyphens
  const cleanedString = inputString.replace(/[^\w\s-]/g, '');
  // Replace spaces with hyphens
  const kebabCaseString = cleanedString.replace(/\s+/g, '-');
  // Convert to lowercase
  return kebabCaseString.toLowerCase();
};

export const getSpecificParagraphs = (text: string, numParagraphs: number) => {
  // Split the text into paragraphs using newline characters as the separator
  const paragraphs = text.split(/\n\s*\n/);

  // Ensure numParagraphs is not greater than the total number of paragraphs available
  const numParagraphsToRetrieve = Math.min(numParagraphs, paragraphs.length);

  // Join the selected paragraphs back into a single string
  const selectedParagraphs = paragraphs
    .slice(0, numParagraphsToRetrieve)
    .join('\n\n');

  return selectedParagraphs;
};

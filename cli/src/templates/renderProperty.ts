import { MakeProperty } from '@/utilities/makeFile';

type PropertyTemplateData = {
  property: MakeProperty;
};

export default function renderProperty({ property }: PropertyTemplateData) {
  return `
${property.name}: ${property.typology}${property.type ? `<${property.type.name}>` : ''}()
`.trim();
}

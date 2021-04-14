import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/react', 'component', {
      name: schema.name,
      project: `${schema.libType}-${schema.lib}`,
      export: true,
    }),
  ]);
}

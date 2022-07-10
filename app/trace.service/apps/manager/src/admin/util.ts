export type IResource = {
  resource: any;
  options: { parent: { name: string } };
};

export type IResourceList = Array<IResource>;

export const transformResources = (
  resources: Array<any>,
  name = 'General',
): IResourceList =>
  resources.map((resource) => {
    return { resource: resource, options: { parent: { name } } };
  });

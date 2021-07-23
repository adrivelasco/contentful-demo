export const getAssetFile = (assets: any[], assetId: string) => {
  const asset = assets.find((asset: any) => asset.sys.id === assetId);

  if (!asset) {
    return null;
  }

  return asset.fields.file;
};
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // webApiBaseUrl: 'http://odin-desa/BackOfficeApi/api/',
  //webApiBaseUrl: 'http://localhost:8182/ManagerSystemAPI/api/',
  webApiBaseUrl: 'http://localhost:59650/api/Proxy/',
  //webApiBaseUrl: 'http://cfbog028:8990/BackOfficeProxy/api/Proxy/',
  // webApiBaseUrl: 'http://cfbog028:8990/BackOfficeApi/api/',
  //webApiBaseUrlPymes:'http://localhost:60755/',
  portalType: 'ADM',
  pageSize: 10,
  currencyConfig: '$ ',
  proxyToken: 'S878ASD89-A78ASD789-PO1U2DGHA',
  loadDocumentProducts : [6,53]
};

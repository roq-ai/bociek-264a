const mapping: Record<string, string> = {
  customers: 'customer',
  firmas: 'firma',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

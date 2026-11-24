export interface ClientItem {
  id: string;
  name: string;
  variant: 'hcl' | 'indswift' | 'ivax' | 'kanakdhara' | 'kriexf';
}

export const CLIENTS_DATA: ClientItem[] = [
  { id: 'hcl', name: 'HCL', variant: 'hcl' },
  { id: 'ind-swift', name: 'Ind-Swift', variant: 'indswift' },
  { id: 'ivax', name: 'IVAX', variant: 'ivax' },
  { id: 'kanakdhara', name: 'KANAKADHARA', variant: 'kanakdhara' },
  { id: 'kri-exf', name: 'KRI EXF', variant: 'kriexf' },
];

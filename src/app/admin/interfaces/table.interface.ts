export interface TableColumn {
  header: string;
  accessor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (data: any) => JSX.Element | string;
}
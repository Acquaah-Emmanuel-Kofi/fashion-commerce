export interface IFilterOption {
  value: string | number;
  label: string;
  checked: boolean;
}

export interface IFilter {
  id: string;
  name: string;
  options: IFilterOption[];
}

export interface IFiltersProps {
  filters: IFilter[];
}

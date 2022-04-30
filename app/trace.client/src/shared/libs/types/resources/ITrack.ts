import {
  IObject,
  IStatusTypes,
} from 'src/shared/libs/types/resources/IObjects';

export interface IuseTrackState {
  windowVisibility: boolean;
  windowOverlay: boolean;
  currentWindow: number;
  dialogDrawer: boolean;
  toolbarVisibility: boolean;
  searchTextState: string;
  panelOverlayAbsolute: boolean;
  setCurrentWindow: (currentWindow: number) => void;
  triggerSearch(): void;
  toggleWindowVisibility(): void;
  toggleWindowOverlay(): void;
  toggleDialogDrawer(): void;
}

export interface IActionItems {
  title: string;
  icon: string;
}

export interface IUseObject {
  objectListItems: Array<IObject>;
  visibleObjects: Array<IObject>;
  filterCurrent?: string;
  statusBarTypes: Array<IStatusTypes>;
  actionItems: Array<IActionItems>;
  triggerSearch(searchText: string): void;
  filterStatus(status: string): void;
  getFilterCurrent(value: string): boolean;
  getFilterColor(status: string): string;
  getObjectEventColor(objectItem: IObject): string;
  getFilterCount(value: string): number;
}

export type IPeriodItem = {
  text: string;
  value: string;
};

export interface IUseHistory {
  selectedObject?: IObject;
  tempObjectList: Array<IObject>;
  periodItems: Array<IPeriodItem>;
  selectedPeriod: IPeriodItem;
  showCustomPeriod: boolean;
}

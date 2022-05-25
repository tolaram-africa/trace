/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, onBeforeMount, onBeforeUnmount } from 'vue';
import { defineStore } from 'pinia';
import { useMapState } from './index';
import { useRouting } from './Routing';

export const useContextmenu = defineStore('app.map.contextMenu', () => {
  const mapState = useMapState();
  const routingState = useRouting();
  const contextMenuOptions = ref({
    contextmenu: true,
    contextmenuWidth: 185,
  });
  const contextMenuItems = ref<Array<any>>([]);
  const defaultContextMenuItems = [
    {
      text: 'Center Here',
      callback: (e: any) => {
        mapState.mapInstance.panTo(e.latlng);
      },
    },
    '-',
    {
      text: 'Show Point',
      callback: () => true,
    },
    '-',
    {
      text: 'Route to point',
      callback: () => true,
    },
    '-',
    {
      text: 'Route between points',
      callback: (e: any) => {
        routingState.addRoute(e);
      },
    },
    '-',
    {
      text: 'New Task',
      callback: () => true,
    },
  ];

  defaultContextMenuItems.map((item: any) => {
    // item.icon = 'bootstrap-icons/arrow-repeat.svg';
    // item.text = 'contextmenu';
    return item;
  });
  onBeforeMount(() => {
    contextMenuItems.value = defaultContextMenuItems;
  });

  onBeforeUnmount(() => {
    contextMenuItems.value = defaultContextMenuItems;
  });

  return {
    contextMenuOptions,
    contextMenuItems,
  };
});

import { create } from 'zustand';
import { initialDashboardData } from '../data/dashboardData';

const useStore = create((set) => ({
  dashboard: initialDashboardData,
  addWidget: (categoryId, widget) => set((state) => ({
    dashboard: {
      ...state.dashboard,
      categories: state.dashboard.categories.map(category => 
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    }
  })),
  removeWidget: (categoryId, widgetId) => set((state) => ({
    dashboard: {
      ...state.dashboard,
      categories: state.dashboard.categories.map(category => 
        category.id === categoryId
          ? { ...category, widgets: category.widgets.filter(w => w.id !== widgetId) }
          : category
      )
    }
  })),
}));

export default useStore;
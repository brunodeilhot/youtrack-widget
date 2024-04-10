import {createContext, useContext, ReactNode} from "react";
import {DashboardApi} from "../../models/Dashboard.ts";
import {WidgetApi} from "../../models/Widget.ts";

type WidgetContextType = {
    dashboardApi: DashboardApi
    widgetApi: WidgetApi
};

const WidgetContext = createContext<WidgetContextType>({} as WidgetContextType);

type Props = { children: ReactNode, dashboardApi: DashboardApi, widgetApi: WidgetApi }

export function WidgetProvider({children, dashboardApi, widgetApi}: Props) {

    return (
        <WidgetContext.Provider value={{dashboardApi, widgetApi}}>
            {children}
        </WidgetContext.Provider>
    )
}

export function useWidget() {
    return useContext(WidgetContext);
}

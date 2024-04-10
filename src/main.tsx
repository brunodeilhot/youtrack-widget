// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DashboardAddons from 'hub-dashboard-addons';
import ReactDOM from 'react-dom/client'
import {Widget} from './Widget.tsx'
import {WidgetProvider} from "./contexts/WidgetContext";
import {DashboardApi} from "./models/Dashboard.ts";
import {WidgetApi} from "./models/Widget.ts";
import './index.css'

DashboardAddons.registerWidget((dashboardApi: DashboardApi, widgetApi: WidgetApi) => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <WidgetProvider dashboardApi={dashboardApi} widgetApi={widgetApi}>
            <Widget/>
        </WidgetProvider>
    )
});

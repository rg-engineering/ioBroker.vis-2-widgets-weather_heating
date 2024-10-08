import React from "react";

import { Box } from "@mui/material";
import WidgetDemoApp from "@iobroker/vis-2-widgets-react-dev/widgetDemoApp";
import { I18n } from "@iobroker/adapter-react-v5";

import WeatherWidget from "./WeatherWidget";
import WeatherDayWidget from "./WeatherDayWidget";

import GeneralEChartWidget from "./GeneralEChartWidget";

import HeatingTimeScheduleWidget from "./HeatingTimeScheduleWidget";
import HeatingGeneralParamsWidget from "./HeatingGeneralParamsWidget";
import HeatingRoomWidget from "./HeatingRoomWidget";
import HeatingRoomsOverviewWidget from "./HeatingRoomsOverviewWidget";
import HeatingRomProfileParamsWidget from "./HeatingRoomProfileParamsWidget";
import HeatingWindowStatusOverviewWidget from "./HeatingWindowStatusOverviewWidget";

import translations from "./translations";

const styles = {
    app: theme => ({
        backgroundColor: theme?.palette?.background.default,
        color: theme?.palette?.text.primary,
        height: "100%",
        width: "100%",
        overflow: "auto",
        display: "flex",
    }),
};

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        // init translations
        I18n.extendTranslations(translations);
    }

    renderWidget() {
        return <Box sx={this.props.classes.app}>
            <WeatherWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 600,
                    height: 200,
                }}
                data={{
                    type: "all",
                }}
            />;

            <GeneralEChartWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 600,
                    height: 200,
                }}
                data={{
                    type: "all",
                }}
            />;

            <WeatherDayWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingTimeScheduleWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingGeneralParamsWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingRoomWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingRoomsOverviewWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingRomProfileParamsWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;

            <HeatingWindowStatusOverviewWidget
                socket={this.socket}
                themeType={this.state.themeType}
                style={{
                    width: 300,
                    height: 150,
                }}
                data={{
                    type: "all",
                }}
            />;


        </Box>;
    }
}

export default App;

import MapMarker from "features/mapMarker";
import Widget from "shared/ui/widget";

interface WidgetProps {
  handleWidtgetToggle: () => void;
  isWidgetOpen: boolean;
}

const AtmsSearchWidget: React.FC<WidgetProps> = ({
  handleWidtgetToggle,
  isWidgetOpen,
}) => {
  return (
    <Widget
      onToggle={handleWidtgetToggle}
      widgetTitle="ATMS Search"
      isWidgetOpen={isWidgetOpen}
    >
      <div>
        <MapMarker />
        <div>
          <h3>Location</h3>
          <p>Address</p>
        </div>
        <div>
          <h3>How to Get There</h3>
          <p>Brief description of how to get to the terminal</p>
        </div>
      </div>
    </Widget>
  );
};

export default AtmsSearchWidget;

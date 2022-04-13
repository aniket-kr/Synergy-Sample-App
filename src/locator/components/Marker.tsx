import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tooltip } from '@mui/material';

interface MarkerProps {
  lat?: number;
  lng?: number;
  isActive: boolean;
}

const Marker = ({ isActive }: MarkerProps) => {
  return isActive ? (
    <span
      style={{
        color: 'lightgreen',
        display: 'inline-block',
        transform: 'translate(-50%, -100%)',
      }}
    >
      <Tooltip
        title={
          <div>
            <h2>Heading 1</h2>
            <span>Hello There beautiful!</span>
          </div>
        }
      >
        <LocationOnIcon fontSize="large" />
      </Tooltip>
    </span>
  ) : (
    <></>
  );
};

export default Marker;

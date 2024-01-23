import sunSVG from '../assets/sun.svg';
import waterSVG from '../assets/water.svg';

function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3];

  const scaleType =
    (careType === 'light' && <img src={sunSVG} alt="sun" />)
    || (careType === 'water' && <img src={waterSVG} alt="water" />);

  return (
    <div>
      {range.map(
        (rangeScale) =>
          scaleValue >= rangeScale && (
            <span key={rangeScale.toString()}>{scaleType}</span>
          )
      )}
    </div>
  );
}

export default CareScale;

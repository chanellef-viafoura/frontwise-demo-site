export default function VfShareBar({ showTotal, orientation }) {
  const isVertical = orientation === 'vertical';
  console.log(orientation)
  return (
    <div className={`viafoura custom-sharebar${isVertical ? '-vertical' : ''}`} style={{minHeight: `${isVertical ? '375px' : '65px'}` }}>
      <div
        className={`vf-widget vf-share-bar-circle vf-share-bar-${orientation}`}
        data-widget="sharebar"
        data-button-view="false"
        data-show-labels="false"
        data-show-counters="false"
        data-show-total={showTotal}
        data-path="/"
      ></div>
    </div>
  );
}

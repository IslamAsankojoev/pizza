import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaScelet = () => (
  <div className="pizza-wrapper">
    <div className="pizza-block">
      <ContentLoader
        speed={2}
        width={280}
        height={455}
        viewBox="0 0 280 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="554" y="538" rx="2" ry="2" width="140" height="10" />
        <rect x="520" y="528" rx="2" ry="2" width="140" height="10" />
        <rect x="576" y="504" rx="2" ry="2" width="400" height="400" />
        <circle cx="138" cy="124" r="124" />
        <rect x="0" y="270" rx="5" ry="5" width="280" height="24" />
        <rect x="0" y="420" rx="5" ry="5" width="90" height="27" />
        <rect x="129" y="410" rx="20" ry="20" width="151" height="44" />
        <rect x="0" y="320" rx="5" ry="5" width="280" height="70" />
      </ContentLoader>
    </div>
  </div>
);

export default PizzaScelet;

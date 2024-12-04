interface PricingIconTypes {
  height:string;
  width:string;
}

const PricingIcon = (props:PricingIconTypes) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1225.53 905.85" height={props.height} width={props.width}>
        <path
          d="M856.61 188c10.95 12.33 17.24 28.14 19.23 46.4 4.9 44.79 21.16 82 50.74 106.6a53.36 53.36 0 0 1 4.27 4c16.32 17 19.79 43.71 12.36 74.71a420.43 420.43 0 0 0-10.41 67c-2.48 33.29-21.52 72.51-56 105.63-26.54 25.41-64.55 46.66-107.8 50.38-62 5.3-104.15 58.16-176.88 92.54-42.52 20.12-112.73 1.38-127.75-14.26-18.17-18.91-17.66-52-2.15-88.84 12.18-28.94 11.44-53.27-1.85-67l-.25-.26c-53-55.2-6-186.14 105-291.25C674.69 169.88 806.24 131.28 856.61 188z"
          fill="none"
          stroke="#ccc"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="6"
          stroke-dasharray="1.99 27.9"
        />
        <path
          d="M343.82 452v-1.5c0-150.57 91.85-272.5 230.37-272.5C712 178 803.06 298.43 803.06 449v1.5c0 150.58-91.85 272.5-230.37 272.5S343.82 602.58 343.82 452zm363.63 0v-1.5c0-103.89-53.45-189-134.76-189S439.43 344.35 439.43 449v1.5c0 103.9 52.7 189 134.76 189S707.45 555.15 707.45 452zM325.66 220.07h-37.23c6.54 5.19 11.28 12.63 12.64 23h24.59v11.29h-24.37c-2.25 23-20.53 37.68-49.41 38.58 17.59 18.28 36.78 41.3 55.73 64.54H286c-17.6-21.21-34.07-40.84-55.29-63.41v-14h12.41c24.37 0 37.46-10.15 39-25.72h-51.46v-11.27h50.77c-3.15-13.08-15.11-19.63-34.75-19.63h-16v-14.66h95z"
          fill="#fcb040"
        />
        <g fill="#387ed1">
          <circle cx="757.06" cy="341.71" r="6.77" />
          <circle cx="805.76" cy="308.96" r="6.77" />
          <circle cx="789.81" cy="390.41" r="6.77" />
          <circle cx="838.51" cy="357.66" r="6.77" />
          <circle cx="887.21" cy="324.91" r="6.77" />
          <circle cx="935.91" cy="292.16" r="6.77" />
          <circle cx="822.55" cy="439.11" r="6.77" />
          <circle cx="871.26" cy="406.36" r="6.77" />
          <circle cx="919.96" cy="373.61" r="6.77" />
          <circle cx="968.66" cy="340.86" r="6.77" />
          <circle cx="904" cy="455.06" r="6.77" />
          <circle cx="952.7" cy="422.31" r="6.77" />
          <circle cx="1001.41" cy="389.57" r="6.77" />
        </g>
      </svg>
    </div>
  );
};

export default PricingIcon;

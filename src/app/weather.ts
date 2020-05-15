export class Weather {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
    precip_mm: number;
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: string;
          mintemp_c: string;
          condition: {
            text: string;
            icon: string;
          };
        };
      }
    ];
  };
  location: {
    country: string;
    name: string;
    region: string;
    localtime: string;
  };
}

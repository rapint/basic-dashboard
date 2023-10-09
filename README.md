# Take-Home Test: Real-Time Dashboard Development

## Features

- Display data fetched from provided [API endpoint](https://dashboard-api-dusky.vercel.app/)
- Display Sales over time and User engagement in chart
- Display Recent Transactions and Top Products in table with pagination
- Display locations in animated mapbox
- Simple Contact Us form

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [React Apexcharts](https://apexcharts.com/docs/react-charts/)
- [React Map Gl](https://visgl.github.io/react-map-gl/)

## Running the App

### Install dependencies

```bash
npm install
```

### Set env vairables

Create .env.local file in the root directory and set auth token for the provided backend API and API key for Mapbox. Refer .env.example file for structure of .env file. 

### Run the development server

```bash
npm run dev
```

Once you run `npm run dev`, the app will be running at `localhost:3000`.

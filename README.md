# To run the project

-  On the terminal run the command

## ` https://github.com/Mykmicheals/technocyTypescript.git `

Navigate to the project directory, and run:

 `cd technocyTypescript `


 # Project Structure

- ` Cypress/`: Cypress for testing performance
- `pages`: Contains all the pages for the app
    - `about/` : The about page containing more information
    - `category`: Category page of the eccomerce products
    - `detail`: Detail Page of each product
    - `signup`: The authentication Page
- `src/`: Source code directory
  - `components/`: React components directory
      - `Header.tsx`: Header component implementation
      - `Carousel.tsx`: The carousel at the homepage
      - `SideBar.tsx`: Sidebar component implementation
      - `DealCard.tsx`: Card components for the deals
      - `Footer.tsx` : Component to display Map component

  - `Screens/`: React pages directory
      - `HomePage.tsx`: Home page component implementation

 - `Store/`: Contains the redux store for the entire project

- `public/`: Public directory
  - `index.html`: HTML template file
  - `favicon.ico`: Favicon icon file
  - `assets/`: Static assets directory
    - `images/`: Image files directory

- `package.json`: NPM package configuration file
- `README.md`: Project README file

### Install all depenecies using :

` yarn install `

Run the app using the command

` yarn run dev `



- Runs the app in the development mode.\
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.




## The HomePage

<img width="1677" alt="Screen Shot 2023-05-15 at 1 20 38 PM" src="https://github.com/Mykmicheals/technocyTypescript/assets/88559940/c2d578a5-81b9-4d6d-8a7b-6f755780b614">


### The carousel Page


<img width="1677" alt="Screen Shot 2023-05-15 at 2 03 43 PM" src="https://github.com/Mykmicheals/technocyTypescript/assets/88559940/aff32f17-02e0-40a2-9a98-cc15128ab9ff">



### The Category Page
<img width="1677" alt="Screen Shot 2023-05-15 at 1 23 44 PM" src="https://github.com/Mykmicheals/technocyTypescript/assets/88559940/b52c4af4-b927-4de4-acd2-84ac62dce878">



### The Detail Page View

<img width="1677" alt="Screen Shot 2023-05-15 at 2 06 05 PM" src="https://github.com/Mykmicheals/technocyTypescript/assets/88559940/595d2aae-dc68-4bbe-a978-b25a0fcc0719">



## The Redux store


```

import { createSlice, configureStore } from "@reduxjs/toolkit";

interface sliceTypes {
  lat: number | null;
  lng: number | null;
}

const initialState: sliceTypes = {
  lat: 40.7128,
  lng: -74.006,
};

const mapSlice = createSlice({
  name: "map",
  initialState: initialState,
  reducers: {
    setLat(state, action) {
      state.lat = action.payload;
    },
    setLng(state, action) {
      state.lng = action.payload;
    },
  },
});

export const { setLat, setLng } = mapSlice.actions;

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const mapStore = (state: RootState) => state.map;

export default store;


```


### Fetch Prodducts Logic

```

export async function getServerSideProps() {
  const res = await fetch(`${serverHost}/popular_products`);
  const data = await res.json()
  return { props: { data } }
}

```


### Cart Reducers

``` 
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        showCartFunc(state) {
            state.showCart = true
        },
        hideCart(state) {
            state.showCart = false
        },
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.cartItems = state.cartItems.concat(action.payload)
                state.totalAmount += parseFloat(action.payload.price)

            } else {
                existingItem.qty++
                state.totalAmount += existingItem.qty * parseFloat(action.payload.price)
            }

        },
        removeFromCart(state, action: PayloadAction<string>) {
            var id = action.payload
            const existingItems = state.cartItems.find(item => item.id === id)
            if (existingItems.qty === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItems.qty--
            }
        }
    }
})

```

### Render Map Logic

```

 <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        style={{ height: '54vh' }}
        longitude={value.lng}
        latitude={value.lat}
        zoom={10}
      >
        <Marker
          longitude={value.lng}
          latitude={value.lat}
          anchor="bottom"
        >
          <HiLocationMarker  onClick={handleMarkerClick} size={32} color="red" />
        </Marker>

        {showPopup && (
          <Popup
            className="mt-28"
            longitude={value.lng}
            latitude={value.lat}
           
            onClose={() => setShowPopup(false)}
          closeOnClick={false}
            anchor="bottom"
          >
            <WeatherComponent showPopup = {showPopup} />
          </Popup>
         )} 
      </Map>

```







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

<img width="1678" alt="homescreen" src="https://github.com/Mykmicheals/yoke/assets/88559940/7a55e3e7-471c-4cbe-b9fc-3a0431011211">



### The Modal Page

<img width="1678" alt="modalhome" src="https://github.com/Mykmicheals/yoke/assets/88559940/b78d81e3-48d3-4b0d-83ff-176f538e144e">


### The Mobile View


<img width="499" alt="mobile" src="https://github.com/Mykmicheals/yoke/assets/88559940/c3037297-6847-4c80-8953-a488b7cbc197">


### The Mobile Sidebar View

<img width="499" alt="sidebar" src="https://github.com/Mykmicheals/yoke/assets/88559940/c359fadf-fa19-40ee-96a9-5188186b9693">



## The Redex store


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







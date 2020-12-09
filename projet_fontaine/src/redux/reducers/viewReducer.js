const intitialState = {
  dropDown: false,
  language: "français",
  center: {
    lat: 45.534811216839316,
    lng: -73.61851604929831,
  },
  selected: null,
  fountainData: [],
  zoom: 16,
  currentLocation: null,
};

const viewReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "DROP_DOWN": {
      return { ...state, dropDown: action.visible };
    }
    case "SET_CENTER": {
      return { ...state, center: action.center };
    }
    case "SET_CURRENT_LOCATION": {
      return { ...state, currentLocation: action.currentLocation };
    }
    case "SET_FOUNTAIN_DATA": {
      return { ...state, fountainData: action.fountainData };
    }
    case "SET_SELECTED": {
      return { ...state, selected: action.selected };
    }
    case "SET_LANGUAGE": {
      return { ...state, language: action.language };
    }
    case "SET_ZOOM": {
      return { ...state, zoom: action.zoom };
    }
    default:
      return state;
  }
};

export default viewReducer;

// const libraries = ["places"];
// const mapContainerStyle = {
//   width: "100vw",
//   height: "100vh",
// };

// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };

// const mapRef = useRef();
// const onMapLoad = useCallback((map) => {
//   mapRef.current = map;
// }, []);

// const { isLoaded, loadError } = useLoadScript(
//   {
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries,
//   },
//   []
// );

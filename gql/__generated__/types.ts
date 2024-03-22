export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address: Maybe<Scalars['String']['output']>;
  city: Maybe<Scalars['String']['output']>;
  state: Maybe<Scalars['String']['output']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Capsule = {
  __typename?: 'Capsule';
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  dragon: Maybe<Dragon>;
  id: Maybe<Scalars['ID']['output']>;
  landings: Maybe<Scalars['Int']['output']>;
  missions: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch: Maybe<Scalars['Date']['output']>;
  reuse_count: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CapsuleMission = {
  __typename?: 'CapsuleMission';
  flight: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type CapsulesFind = {
  id: InputMaybe<Scalars['ID']['input']>;
  landings: InputMaybe<Scalars['Int']['input']>;
  mission: InputMaybe<Scalars['String']['input']>;
  original_launch: InputMaybe<Scalars['Date']['input']>;
  reuse_count: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location: Maybe<Location>;
  /** The name of the character. */
  name: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin: Maybe<Location>;
  /** The species of the character. */
  species: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  __typename?: 'Characters';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Character>>>;
};

export type Core = {
  __typename?: 'Core';
  asds_attempts: Maybe<Scalars['Int']['output']>;
  asds_landings: Maybe<Scalars['Int']['output']>;
  block: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  missions: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch: Maybe<Scalars['Date']['output']>;
  reuse_count: Maybe<Scalars['Int']['output']>;
  rtls_attempts: Maybe<Scalars['Int']['output']>;
  rtls_landings: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  water_landing: Maybe<Scalars['Boolean']['output']>;
};

export type CoreMission = {
  __typename?: 'CoreMission';
  flight: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type CoresFind = {
  asds_attempts: InputMaybe<Scalars['Int']['input']>;
  asds_landings: InputMaybe<Scalars['Int']['input']>;
  block: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  missions: InputMaybe<Scalars['String']['input']>;
  original_launch: InputMaybe<Scalars['Date']['input']>;
  reuse_count: InputMaybe<Scalars['Int']['input']>;
  rtls_attempts: InputMaybe<Scalars['Int']['input']>;
  rtls_landings: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  water_landing: InputMaybe<Scalars['Boolean']['input']>;
};

export type Distance = {
  __typename?: 'Distance';
  feet: Maybe<Scalars['Float']['output']>;
  meters: Maybe<Scalars['Float']['output']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  active: Maybe<Scalars['Boolean']['output']>;
  crew_capacity: Maybe<Scalars['Int']['output']>;
  description: Maybe<Scalars['String']['output']>;
  diameter: Maybe<Distance>;
  dry_mass_kg: Maybe<Scalars['Int']['output']>;
  dry_mass_lb: Maybe<Scalars['Int']['output']>;
  first_flight: Maybe<Scalars['String']['output']>;
  heat_shield: Maybe<DragonHeatShield>;
  height_w_trunk: Maybe<Distance>;
  id: Maybe<Scalars['ID']['output']>;
  launch_payload_mass: Maybe<Mass>;
  launch_payload_vol: Maybe<Volume>;
  name: Maybe<Scalars['String']['output']>;
  orbit_duration_yr: Maybe<Scalars['Int']['output']>;
  pressurized_capsule: Maybe<DragonPressurizedCapsule>;
  return_payload_mass: Maybe<Mass>;
  return_payload_vol: Maybe<Volume>;
  sidewall_angle_deg: Maybe<Scalars['Float']['output']>;
  thrusters: Maybe<Array<Maybe<DragonThrust>>>;
  trunk: Maybe<DragonTrunk>;
  type: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type DragonHeatShield = {
  __typename?: 'DragonHeatShield';
  dev_partner: Maybe<Scalars['String']['output']>;
  material: Maybe<Scalars['String']['output']>;
  size_meters: Maybe<Scalars['Float']['output']>;
  temp_degrees: Maybe<Scalars['Int']['output']>;
};

export type DragonPressurizedCapsule = {
  __typename?: 'DragonPressurizedCapsule';
  payload_volume: Maybe<Volume>;
};

export type DragonThrust = {
  __typename?: 'DragonThrust';
  amount: Maybe<Scalars['Int']['output']>;
  fuel_1: Maybe<Scalars['String']['output']>;
  fuel_2: Maybe<Scalars['String']['output']>;
  pods: Maybe<Scalars['Int']['output']>;
  thrust: Maybe<Force>;
  type: Maybe<Scalars['String']['output']>;
};

export type DragonTrunk = {
  __typename?: 'DragonTrunk';
  cargo: Maybe<DragonTrunkCargo>;
  trunk_volume: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  __typename?: 'DragonTrunkCargo';
  solar_array: Maybe<Scalars['Int']['output']>;
  unpressurized_cargo: Maybe<Scalars['Boolean']['output']>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Episode>>>;
};

/** A single film. */
export type Film = Node & {
  __typename?: 'Film';
  characterConnection: Maybe<FilmCharactersConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The name of the director of this film. */
  director: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  /** The episode number of this film. */
  episodeID: Maybe<Scalars['Int']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl: Maybe<Scalars['String']['output']>;
  planetConnection: Maybe<FilmPlanetsConnection>;
  /** The name(s) of the producer(s) of this film. */
  producers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate: Maybe<Scalars['String']['output']>;
  speciesConnection: Maybe<FilmSpeciesConnection>;
  starshipConnection: Maybe<FilmStarshipsConnection>;
  /** The title of this film. */
  title: Maybe<Scalars['String']['output']>;
  vehicleConnection: Maybe<FilmVehiclesConnection>;
};


/** A single film. */
export type FilmCharacterConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type FilmPlanetConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type FilmSpeciesConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type FilmStarshipConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single film. */
export type FilmVehicleConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type FilmCharactersConnection = {
  __typename?: 'FilmCharactersConnection';
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters: Maybe<Array<Maybe<Person>>>;
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type FilmCharactersEdge = {
  __typename?: 'FilmCharactersEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** A connection to a list of items. */
export type FilmPlanetsConnection = {
  __typename?: 'FilmPlanetsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type FilmPlanetsEdge = {
  __typename?: 'FilmPlanetsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Planet>;
};

/** A connection to a list of items. */
export type FilmSpeciesConnection = {
  __typename?: 'FilmSpeciesConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type FilmSpeciesEdge = {
  __typename?: 'FilmSpeciesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Species>;
};

/** A connection to a list of items. */
export type FilmStarshipsConnection = {
  __typename?: 'FilmStarshipsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type FilmStarshipsEdge = {
  __typename?: 'FilmStarshipsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Starship>;
};

/** A connection to a list of items. */
export type FilmVehiclesConnection = {
  __typename?: 'FilmVehiclesConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type FilmVehiclesEdge = {
  __typename?: 'FilmVehiclesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Vehicle>;
};

/** A connection to a list of items. */
export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  species: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type Force = {
  __typename?: 'Force';
  kN: Maybe<Scalars['Float']['output']>;
  lbf: Maybe<Scalars['Float']['output']>;
};

export type HistoriesResult = {
  __typename?: 'HistoriesResult';
  data: Maybe<Array<Maybe<History>>>;
  result: Maybe<Result>;
};

export type History = {
  __typename?: 'History';
  details: Maybe<Scalars['String']['output']>;
  event_date_unix: Maybe<Scalars['Date']['output']>;
  event_date_utc: Maybe<Scalars['Date']['output']>;
  flight: Maybe<Launch>;
  id: Maybe<Scalars['ID']['output']>;
  links: Maybe<Link>;
  title: Maybe<Scalars['String']['output']>;
};

export type HistoryFind = {
  end: InputMaybe<Scalars['Date']['input']>;
  flight_number: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  start: InputMaybe<Scalars['Date']['input']>;
};

export type Info = {
  __typename?: 'Info';
  ceo: Maybe<Scalars['String']['output']>;
  coo: Maybe<Scalars['String']['output']>;
  /** The length of the response. */
  count: Maybe<Scalars['Int']['output']>;
  cto: Maybe<Scalars['String']['output']>;
  cto_propulsion: Maybe<Scalars['String']['output']>;
  employees: Maybe<Scalars['Int']['output']>;
  founded: Maybe<Scalars['Int']['output']>;
  founder: Maybe<Scalars['String']['output']>;
  headquarters: Maybe<Address>;
  launch_sites: Maybe<Scalars['Int']['output']>;
  links: Maybe<InfoLinks>;
  name: Maybe<Scalars['String']['output']>;
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']['output']>;
  summary: Maybe<Scalars['String']['output']>;
  test_sites: Maybe<Scalars['Int']['output']>;
  valuation: Maybe<Scalars['Float']['output']>;
  vehicles: Maybe<Scalars['Int']['output']>;
};

export type InfoLinks = {
  __typename?: 'InfoLinks';
  elon_twitter: Maybe<Scalars['String']['output']>;
  flickr: Maybe<Scalars['String']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
  website: Maybe<Scalars['String']['output']>;
};

export type Landpad = {
  __typename?: 'Landpad';
  attempted_landings: Maybe<Scalars['String']['output']>;
  details: Maybe<Scalars['String']['output']>;
  full_name: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  landing_type: Maybe<Scalars['String']['output']>;
  location: Maybe<Location>;
  status: Maybe<Scalars['String']['output']>;
  successful_landings: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type Launch = {
  __typename?: 'Launch';
  details: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  is_tentative: Maybe<Scalars['Boolean']['output']>;
  launch_date_local: Maybe<Scalars['Date']['output']>;
  launch_date_unix: Maybe<Scalars['Date']['output']>;
  launch_date_utc: Maybe<Scalars['Date']['output']>;
  launch_site: Maybe<LaunchSite>;
  launch_success: Maybe<Scalars['Boolean']['output']>;
  launch_year: Maybe<Scalars['String']['output']>;
  links: Maybe<LaunchLinks>;
  mission_id: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mission_name: Maybe<Scalars['String']['output']>;
  rocket: Maybe<LaunchRocket>;
  ships: Maybe<Array<Maybe<Ship>>>;
  static_fire_date_unix: Maybe<Scalars['Date']['output']>;
  static_fire_date_utc: Maybe<Scalars['Date']['output']>;
  telemetry: Maybe<LaunchTelemetry>;
  tentative_max_precision: Maybe<Scalars['String']['output']>;
  upcoming: Maybe<Scalars['Boolean']['output']>;
};

export type LaunchFind = {
  apoapsis_km: InputMaybe<Scalars['Float']['input']>;
  block: InputMaybe<Scalars['Int']['input']>;
  cap_serial: InputMaybe<Scalars['String']['input']>;
  capsule_reuse: InputMaybe<Scalars['String']['input']>;
  core_flight: InputMaybe<Scalars['Int']['input']>;
  core_reuse: InputMaybe<Scalars['String']['input']>;
  core_serial: InputMaybe<Scalars['String']['input']>;
  customer: InputMaybe<Scalars['String']['input']>;
  eccentricity: InputMaybe<Scalars['Float']['input']>;
  end: InputMaybe<Scalars['Date']['input']>;
  epoch: InputMaybe<Scalars['Date']['input']>;
  fairings_recovered: InputMaybe<Scalars['String']['input']>;
  fairings_recovery_attempt: InputMaybe<Scalars['String']['input']>;
  fairings_reuse: InputMaybe<Scalars['String']['input']>;
  fairings_reused: InputMaybe<Scalars['String']['input']>;
  fairings_ship: InputMaybe<Scalars['String']['input']>;
  gridfins: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  inclination_deg: InputMaybe<Scalars['Float']['input']>;
  land_success: InputMaybe<Scalars['String']['input']>;
  landing_intent: InputMaybe<Scalars['String']['input']>;
  landing_type: InputMaybe<Scalars['String']['input']>;
  landing_vehicle: InputMaybe<Scalars['String']['input']>;
  launch_date_local: InputMaybe<Scalars['Date']['input']>;
  launch_date_utc: InputMaybe<Scalars['Date']['input']>;
  launch_success: InputMaybe<Scalars['String']['input']>;
  launch_year: InputMaybe<Scalars['String']['input']>;
  legs: InputMaybe<Scalars['String']['input']>;
  lifespan_years: InputMaybe<Scalars['Float']['input']>;
  longitude: InputMaybe<Scalars['Float']['input']>;
  manufacturer: InputMaybe<Scalars['String']['input']>;
  mean_motion: InputMaybe<Scalars['Float']['input']>;
  mission_id: InputMaybe<Scalars['String']['input']>;
  mission_name: InputMaybe<Scalars['String']['input']>;
  nationality: InputMaybe<Scalars['String']['input']>;
  norad_id: InputMaybe<Scalars['Int']['input']>;
  orbit: InputMaybe<Scalars['String']['input']>;
  payload_id: InputMaybe<Scalars['String']['input']>;
  payload_type: InputMaybe<Scalars['String']['input']>;
  periapsis_km: InputMaybe<Scalars['Float']['input']>;
  period_min: InputMaybe<Scalars['Float']['input']>;
  raan: InputMaybe<Scalars['Float']['input']>;
  reference_system: InputMaybe<Scalars['String']['input']>;
  regime: InputMaybe<Scalars['String']['input']>;
  reused: InputMaybe<Scalars['String']['input']>;
  rocket_id: InputMaybe<Scalars['String']['input']>;
  rocket_name: InputMaybe<Scalars['String']['input']>;
  rocket_type: InputMaybe<Scalars['String']['input']>;
  second_stage_block: InputMaybe<Scalars['String']['input']>;
  semi_major_axis_km: InputMaybe<Scalars['Float']['input']>;
  ship: InputMaybe<Scalars['String']['input']>;
  side_core1_reuse: InputMaybe<Scalars['String']['input']>;
  side_core2_reuse: InputMaybe<Scalars['String']['input']>;
  site_id: InputMaybe<Scalars['String']['input']>;
  site_name: InputMaybe<Scalars['String']['input']>;
  site_name_long: InputMaybe<Scalars['String']['input']>;
  start: InputMaybe<Scalars['Date']['input']>;
  tbd: InputMaybe<Scalars['String']['input']>;
  tentative: InputMaybe<Scalars['String']['input']>;
  tentative_max_precision: InputMaybe<Scalars['String']['input']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  article_link: Maybe<Scalars['String']['output']>;
  flickr_images: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mission_patch: Maybe<Scalars['String']['output']>;
  mission_patch_small: Maybe<Scalars['String']['output']>;
  presskit: Maybe<Scalars['String']['output']>;
  reddit_campaign: Maybe<Scalars['String']['output']>;
  reddit_launch: Maybe<Scalars['String']['output']>;
  reddit_media: Maybe<Scalars['String']['output']>;
  reddit_recovery: Maybe<Scalars['String']['output']>;
  video_link: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  fairings: Maybe<LaunchRocketFairings>;
  first_stage: Maybe<LaunchRocketFirstStage>;
  rocket: Maybe<Rocket>;
  rocket_name: Maybe<Scalars['String']['output']>;
  rocket_type: Maybe<Scalars['String']['output']>;
  second_stage: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  recovered: Maybe<Scalars['Boolean']['output']>;
  recovery_attempt: Maybe<Scalars['Boolean']['output']>;
  reused: Maybe<Scalars['Boolean']['output']>;
  ship: Maybe<Scalars['String']['output']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  block: Maybe<Scalars['Int']['output']>;
  core: Maybe<Core>;
  flight: Maybe<Scalars['Int']['output']>;
  gridfins: Maybe<Scalars['Boolean']['output']>;
  land_success: Maybe<Scalars['Boolean']['output']>;
  landing_intent: Maybe<Scalars['Boolean']['output']>;
  landing_type: Maybe<Scalars['String']['output']>;
  landing_vehicle: Maybe<Scalars['String']['output']>;
  legs: Maybe<Scalars['Boolean']['output']>;
  reused: Maybe<Scalars['Boolean']['output']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block: Maybe<Scalars['Int']['output']>;
  payloads: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id: Maybe<Scalars['String']['output']>;
  site_name: Maybe<Scalars['String']['output']>;
  site_name_long: Maybe<Scalars['String']['output']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club: Maybe<Scalars['String']['output']>;
};

export type LaunchesPastResult = {
  __typename?: 'LaunchesPastResult';
  data: Maybe<Array<Maybe<Launch>>>;
  result: Maybe<Result>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  attempted_launches: Maybe<Scalars['Int']['output']>;
  details: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  location: Maybe<Location>;
  name: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  successful_launches: Maybe<Scalars['Int']['output']>;
  vehicles_launched: Maybe<Array<Maybe<Rocket>>>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type Link = {
  __typename?: 'Link';
  article: Maybe<Scalars['String']['output']>;
  reddit: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id: Maybe<Scalars['ID']['output']>;
  latitude: Maybe<Scalars['Float']['output']>;
  longitude: Maybe<Scalars['Float']['output']>;
  /** The name of the location. */
  name: Maybe<Scalars['String']['output']>;
  region: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  __typename?: 'Locations';
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Location>>>;
};

export type Mass = {
  __typename?: 'Mass';
  kg: Maybe<Scalars['Int']['output']>;
  lb: Maybe<Scalars['Int']['output']>;
};

export type Mission = {
  __typename?: 'Mission';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  manufacturers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Maybe<Scalars['String']['output']>;
  payloads: Maybe<Array<Maybe<Payload>>>;
  twitter: Maybe<Scalars['String']['output']>;
  website: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type MissionResult = {
  __typename?: 'MissionResult';
  data: Maybe<Array<Maybe<Mission>>>;
  result: Maybe<Result>;
};

export type MissionsFind = {
  id: InputMaybe<Scalars['ID']['input']>;
  manufacturer: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  payload_id: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
};


export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type MutationInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};


export type MutationUpdate_UsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Payload = {
  __typename?: 'Payload';
  customers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Maybe<Scalars['ID']['output']>;
  manufacturer: Maybe<Scalars['String']['output']>;
  nationality: Maybe<Scalars['String']['output']>;
  norad_id: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  orbit: Maybe<Scalars['String']['output']>;
  orbit_params: Maybe<PayloadOrbitParams>;
  payload_mass_kg: Maybe<Scalars['Float']['output']>;
  payload_mass_lbs: Maybe<Scalars['Float']['output']>;
  payload_type: Maybe<Scalars['String']['output']>;
  reused: Maybe<Scalars['Boolean']['output']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  apoapsis_km: Maybe<Scalars['Float']['output']>;
  arg_of_pericenter: Maybe<Scalars['Float']['output']>;
  eccentricity: Maybe<Scalars['Float']['output']>;
  epoch: Maybe<Scalars['Date']['output']>;
  inclination_deg: Maybe<Scalars['Float']['output']>;
  lifespan_years: Maybe<Scalars['Float']['output']>;
  longitude: Maybe<Scalars['Float']['output']>;
  mean_anomaly: Maybe<Scalars['Float']['output']>;
  mean_motion: Maybe<Scalars['Float']['output']>;
  periapsis_km: Maybe<Scalars['Float']['output']>;
  period_min: Maybe<Scalars['Float']['output']>;
  raan: Maybe<Scalars['Float']['output']>;
  reference_system: Maybe<Scalars['String']['output']>;
  regime: Maybe<Scalars['String']['output']>;
  semi_major_axis_km: Maybe<Scalars['Float']['output']>;
};

export type PayloadsFind = {
  apoapsis_km: InputMaybe<Scalars['Float']['input']>;
  customer: InputMaybe<Scalars['String']['input']>;
  eccentricity: InputMaybe<Scalars['Float']['input']>;
  epoch: InputMaybe<Scalars['Date']['input']>;
  inclination_deg: InputMaybe<Scalars['Float']['input']>;
  lifespan_years: InputMaybe<Scalars['Float']['input']>;
  longitude: InputMaybe<Scalars['Float']['input']>;
  manufacturer: InputMaybe<Scalars['String']['input']>;
  mean_motion: InputMaybe<Scalars['Float']['input']>;
  nationality: InputMaybe<Scalars['String']['input']>;
  norad_id: InputMaybe<Scalars['Int']['input']>;
  orbit: InputMaybe<Scalars['String']['input']>;
  payload_id: InputMaybe<Scalars['ID']['input']>;
  payload_type: InputMaybe<Scalars['String']['input']>;
  periapsis_km: InputMaybe<Scalars['Float']['input']>;
  period_min: InputMaybe<Scalars['Float']['input']>;
  raan: InputMaybe<Scalars['Float']['input']>;
  reference_system: InputMaybe<Scalars['String']['input']>;
  regime: InputMaybe<Scalars['String']['input']>;
  reused: InputMaybe<Scalars['Boolean']['input']>;
  semi_major_axis_km: InputMaybe<Scalars['Float']['input']>;
};

/** A connection to a list of items. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PeopleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** An individual person or character within the Star Wars universe. */
export type Person = Node & {
  __typename?: 'Person';
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: Maybe<Scalars['String']['output']>;
  filmConnection: Maybe<PersonFilmsConnection>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: Maybe<Scalars['String']['output']>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor: Maybe<Scalars['String']['output']>;
  /** The height of the person in centimeters. */
  height: Maybe<Scalars['Int']['output']>;
  /** A planet that this person was born on or inhabits. */
  homeworld: Maybe<Planet>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The mass of the person in kilograms. */
  mass: Maybe<Scalars['Float']['output']>;
  /** The name of this person. */
  name: Maybe<Scalars['String']['output']>;
  /** The skin color of this person. */
  skinColor: Maybe<Scalars['String']['output']>;
  /** The species that this person belongs to, or null if unknown. */
  species: Maybe<Species>;
  starshipConnection: Maybe<PersonStarshipsConnection>;
  vehicleConnection: Maybe<PersonVehiclesConnection>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonFilmConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonStarshipConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonVehicleConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type PersonFilmsConnection = {
  __typename?: 'PersonFilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PersonFilmsEdge = {
  __typename?: 'PersonFilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

/** A connection to a list of items. */
export type PersonStarshipsConnection = {
  __typename?: 'PersonStarshipsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PersonStarshipsEdge = {
  __typename?: 'PersonStarshipsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Starship>;
};

/** A connection to a list of items. */
export type PersonVehiclesConnection = {
  __typename?: 'PersonVehiclesConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type PersonVehiclesEdge = {
  __typename?: 'PersonVehiclesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Vehicle>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type Planet = Node & {
  __typename?: 'Planet';
  /** The climates of this planet. */
  climates: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The diameter of this planet in kilometers. */
  diameter: Maybe<Scalars['Int']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  filmConnection: Maybe<PlanetFilmsConnection>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity: Maybe<Scalars['String']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The name of this planet. */
  name: Maybe<Scalars['String']['output']>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod: Maybe<Scalars['Int']['output']>;
  /** The average population of sentient beings inhabiting this planet. */
  population: Maybe<Scalars['Float']['output']>;
  residentConnection: Maybe<PlanetResidentsConnection>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: Maybe<Scalars['Int']['output']>;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater: Maybe<Scalars['Float']['output']>;
  /** The terrains of this planet. */
  terrains: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetFilmConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetResidentConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type PlanetFilmsConnection = {
  __typename?: 'PlanetFilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PlanetFilmsEdge = {
  __typename?: 'PlanetFilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

/** A connection to a list of items. */
export type PlanetResidentsConnection = {
  __typename?: 'PlanetResidentsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PlanetResidentsEdge = {
  __typename?: 'PlanetResidentsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** A connection to a list of items. */
export type PlanetsConnection = {
  __typename?: 'PlanetsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<PlanetsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets: Maybe<Array<Maybe<Planet>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type PlanetsEdge = {
  __typename?: 'PlanetsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Planet>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  capsule: Maybe<Capsule>;
  capsules: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming: Maybe<Array<Maybe<Capsule>>>;
  /** Get a specific character by ID */
  character: Maybe<Character>;
  /** Get the list of all characters */
  characters: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<Character>>>;
  company: Maybe<Info>;
  core: Maybe<Core>;
  cores: Maybe<Array<Maybe<Core>>>;
  coresPast: Maybe<Array<Maybe<Core>>>;
  coresUpcoming: Maybe<Array<Maybe<Core>>>;
  dragon: Maybe<Dragon>;
  dragons: Maybe<Array<Maybe<Dragon>>>;
  /** Get a specific episode by ID */
  episode: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<Episode>>>;
  histories: Maybe<Array<Maybe<History>>>;
  historiesResult: Maybe<HistoriesResult>;
  history: Maybe<History>;
  landpad: Maybe<Landpad>;
  landpads: Maybe<Array<Maybe<Landpad>>>;
  launch: Maybe<Launch>;
  launchLatest: Maybe<Launch>;
  launchNext: Maybe<Launch>;
  launches: Maybe<Array<Maybe<Launch>>>;
  launchesPast: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult: Maybe<LaunchesPastResult>;
  launchesUpcoming: Maybe<Array<Maybe<Launch>>>;
  launchpad: Maybe<Launchpad>;
  launchpads: Maybe<Array<Maybe<Launchpad>>>;
  /** Get a specific locations by ID */
  location: Maybe<Location>;
  /** Get the list of all locations */
  locations: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<Location>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  mission: Maybe<Mission>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missions: Maybe<Array<Maybe<Mission>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missionsResult: Maybe<MissionResult>;
  payload: Maybe<Payload>;
  payloads: Maybe<Array<Maybe<Payload>>>;
  roadster: Maybe<Roadster>;
  rocket: Maybe<Rocket>;
  rockets: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult: Maybe<RocketsResult>;
  ship: Maybe<Ship>;
  ships: Maybe<Array<Maybe<Ship>>>;
  shipsResult: Maybe<ShipsResult>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type QueryCapsuleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCapsulesArgs = {
  find: InputMaybe<CapsulesFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryCapsulesPastArgs = {
  find: InputMaybe<CapsulesFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryCapsulesUpcomingArgs = {
  find: InputMaybe<CapsulesFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryCoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCoresArgs = {
  find: InputMaybe<CoresFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryCoresPastArgs = {
  find: InputMaybe<CoresFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryCoresUpcomingArgs = {
  find: InputMaybe<CoresFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryDragonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDragonsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryHistoriesArgs = {
  find: InputMaybe<HistoryFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryHistoriesResultArgs = {
  find: InputMaybe<HistoryFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLandpadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLandpadsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLaunchLatestArgs = {
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLaunchNextArgs = {
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLaunchesArgs = {
  find: InputMaybe<LaunchFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryLaunchesPastArgs = {
  find: InputMaybe<LaunchFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryLaunchesPastResultArgs = {
  find: InputMaybe<LaunchFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryLaunchesUpcomingArgs = {
  find: InputMaybe<LaunchFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLaunchpadsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryMissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMissionsArgs = {
  find: InputMaybe<MissionsFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMissionsResultArgs = {
  find: InputMaybe<MissionsFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPayloadArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPayloadsArgs = {
  find: InputMaybe<PayloadsFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryRocketArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRocketsArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRocketsResultArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShipsArgs = {
  find: InputMaybe<ShipsFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryShipsResultArgs = {
  find: InputMaybe<ShipsFind>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Result = {
  __typename?: 'Result';
  totalCount: Maybe<Scalars['Int']['output']>;
};

export type Roadster = {
  __typename?: 'Roadster';
  apoapsis_au: Maybe<Scalars['Float']['output']>;
  details: Maybe<Scalars['String']['output']>;
  earth_distance_km: Maybe<Scalars['Float']['output']>;
  earth_distance_mi: Maybe<Scalars['Float']['output']>;
  eccentricity: Maybe<Scalars['Float']['output']>;
  epoch_jd: Maybe<Scalars['Float']['output']>;
  inclination: Maybe<Scalars['Float']['output']>;
  launch_date_unix: Maybe<Scalars['Date']['output']>;
  launch_date_utc: Maybe<Scalars['Date']['output']>;
  launch_mass_kg: Maybe<Scalars['Int']['output']>;
  launch_mass_lbs: Maybe<Scalars['Int']['output']>;
  longitude: Maybe<Scalars['Float']['output']>;
  mars_distance_km: Maybe<Scalars['Float']['output']>;
  mars_distance_mi: Maybe<Scalars['Float']['output']>;
  name: Maybe<Scalars['String']['output']>;
  norad_id: Maybe<Scalars['Int']['output']>;
  orbit_type: Maybe<Scalars['Float']['output']>;
  periapsis_arg: Maybe<Scalars['Float']['output']>;
  periapsis_au: Maybe<Scalars['Float']['output']>;
  period_days: Maybe<Scalars['Float']['output']>;
  semi_major_axis_au: Maybe<Scalars['Float']['output']>;
  speed_kph: Maybe<Scalars['Float']['output']>;
  speed_mph: Maybe<Scalars['Float']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active: Maybe<Scalars['Boolean']['output']>;
  boosters: Maybe<Scalars['Int']['output']>;
  company: Maybe<Scalars['String']['output']>;
  cost_per_launch: Maybe<Scalars['Int']['output']>;
  country: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  diameter: Maybe<Distance>;
  engines: Maybe<RocketEngines>;
  first_flight: Maybe<Scalars['Date']['output']>;
  first_stage: Maybe<RocketFirstStage>;
  height: Maybe<Distance>;
  id: Maybe<Scalars['ID']['output']>;
  landing_legs: Maybe<RocketLandingLegs>;
  mass: Maybe<Mass>;
  name: Maybe<Scalars['String']['output']>;
  payload_weights: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage: Maybe<RocketSecondStage>;
  stages: Maybe<Scalars['Int']['output']>;
  success_rate_pct: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
  wikipedia: Maybe<Scalars['String']['output']>;
};

export type RocketEngines = {
  __typename?: 'RocketEngines';
  engine_loss_max: Maybe<Scalars['String']['output']>;
  layout: Maybe<Scalars['String']['output']>;
  number: Maybe<Scalars['Int']['output']>;
  propellant_1: Maybe<Scalars['String']['output']>;
  propellant_2: Maybe<Scalars['String']['output']>;
  thrust_sea_level: Maybe<Force>;
  thrust_to_weight: Maybe<Scalars['Float']['output']>;
  thrust_vacuum: Maybe<Force>;
  type: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  burn_time_sec: Maybe<Scalars['Int']['output']>;
  engines: Maybe<Scalars['Int']['output']>;
  fuel_amount_tons: Maybe<Scalars['Float']['output']>;
  reusable: Maybe<Scalars['Boolean']['output']>;
  thrust_sea_level: Maybe<Force>;
  thrust_vacuum: Maybe<Force>;
};

export type RocketLandingLegs = {
  __typename?: 'RocketLandingLegs';
  material: Maybe<Scalars['String']['output']>;
  number: Maybe<Scalars['Int']['output']>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id: Maybe<Scalars['String']['output']>;
  kg: Maybe<Scalars['Int']['output']>;
  lb: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  burn_time_sec: Maybe<Scalars['Int']['output']>;
  engines: Maybe<Scalars['Int']['output']>;
  fuel_amount_tons: Maybe<Scalars['Float']['output']>;
  payloads: Maybe<RocketSecondStagePayloads>;
  thrust: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: 'RocketSecondStagePayloadCompositeFairing';
  diameter: Maybe<Distance>;
  height: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  __typename?: 'RocketSecondStagePayloads';
  composite_fairing: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1: Maybe<Scalars['String']['output']>;
};

export type RocketsResult = {
  __typename?: 'RocketsResult';
  data: Maybe<Array<Maybe<Rocket>>>;
  result: Maybe<Result>;
};

export type Root = {
  __typename?: 'Root';
  allFilms: Maybe<FilmsConnection>;
  allPeople: Maybe<PeopleConnection>;
  allPlanets: Maybe<PlanetsConnection>;
  allSpecies: Maybe<SpeciesConnection>;
  allStarships: Maybe<StarshipsConnection>;
  allVehicles: Maybe<VehiclesConnection>;
  film: Maybe<Film>;
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  person: Maybe<Person>;
  planet: Maybe<Planet>;
  species: Maybe<Species>;
  starship: Maybe<Starship>;
  vehicle: Maybe<Vehicle>;
};


export type RootAllFilmsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootAllPeopleArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootAllPlanetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootAllSpeciesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootAllStarshipsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootAllVehiclesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


export type RootFilmArgs = {
  filmID: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
};


export type RootNodeArgs = {
  id: Scalars['ID']['input'];
};


export type RootPersonArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  personID: InputMaybe<Scalars['ID']['input']>;
};


export type RootPlanetArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  planetID: InputMaybe<Scalars['ID']['input']>;
};


export type RootSpeciesArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  speciesID: InputMaybe<Scalars['ID']['input']>;
};


export type RootStarshipArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  starshipID: InputMaybe<Scalars['ID']['input']>;
};


export type RootVehicleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  vehicleID: InputMaybe<Scalars['ID']['input']>;
};

export type Ship = {
  __typename?: 'Ship';
  abs: Maybe<Scalars['Int']['output']>;
  active: Maybe<Scalars['Boolean']['output']>;
  attempted_landings: Maybe<Scalars['Int']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  course_deg: Maybe<Scalars['Int']['output']>;
  home_port: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: Maybe<Scalars['String']['output']>;
  imo: Maybe<Scalars['Int']['output']>;
  missions: Maybe<Array<Maybe<ShipMission>>>;
  mmsi: Maybe<Scalars['Int']['output']>;
  model: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  position: Maybe<ShipLocation>;
  roles: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  speed_kn: Maybe<Scalars['Float']['output']>;
  status: Maybe<Scalars['String']['output']>;
  successful_landings: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
  weight_kg: Maybe<Scalars['Int']['output']>;
  weight_lbs: Maybe<Scalars['Int']['output']>;
  year_built: Maybe<Scalars['Int']['output']>;
};

export type ShipLocation = {
  __typename?: 'ShipLocation';
  latitude: Maybe<Scalars['Float']['output']>;
  longitude: Maybe<Scalars['Float']['output']>;
};

export type ShipMission = {
  __typename?: 'ShipMission';
  flight: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type ShipsFind = {
  abs: InputMaybe<Scalars['Int']['input']>;
  active: InputMaybe<Scalars['Boolean']['input']>;
  attempted_landings: InputMaybe<Scalars['Int']['input']>;
  class: InputMaybe<Scalars['Int']['input']>;
  course_deg: InputMaybe<Scalars['Int']['input']>;
  home_port: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  imo: InputMaybe<Scalars['Int']['input']>;
  latitude: InputMaybe<Scalars['Float']['input']>;
  longitude: InputMaybe<Scalars['Float']['input']>;
  mission: InputMaybe<Scalars['String']['input']>;
  mmsi: InputMaybe<Scalars['Int']['input']>;
  model: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['String']['input']>;
  speed_kn: InputMaybe<Scalars['Int']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  successful_landings: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
  weight_kg: InputMaybe<Scalars['Int']['input']>;
  weight_lbs: InputMaybe<Scalars['Int']['input']>;
  year_built: InputMaybe<Scalars['Int']['input']>;
};

export type ShipsResult = {
  __typename?: 'ShipsResult';
  data: Maybe<Array<Maybe<Ship>>>;
  result: Maybe<Result>;
};

/** A type of person or character within the Star Wars Universe. */
export type Species = Node & {
  __typename?: 'Species';
  /** The average height of this species in centimeters. */
  averageHeight: Maybe<Scalars['Float']['output']>;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan: Maybe<Scalars['Int']['output']>;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The designation of this species, such as "sentient". */
  designation: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  filmConnection: Maybe<SpeciesFilmsConnection>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A planet that this species originates from. */
  homeworld: Maybe<Planet>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The language commonly spoken by this species. */
  language: Maybe<Scalars['String']['output']>;
  /** The name of this species. */
  name: Maybe<Scalars['String']['output']>;
  personConnection: Maybe<SpeciesPeopleConnection>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesFilmConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesPersonConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type SpeciesConnection = {
  __typename?: 'SpeciesConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<SpeciesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species: Maybe<Array<Maybe<Species>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type SpeciesEdge = {
  __typename?: 'SpeciesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Species>;
};

/** A connection to a list of items. */
export type SpeciesFilmsConnection = {
  __typename?: 'SpeciesFilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type SpeciesFilmsEdge = {
  __typename?: 'SpeciesFilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

/** A connection to a list of items. */
export type SpeciesPeopleConnection = {
  __typename?: 'SpeciesPeopleConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type SpeciesPeopleEdge = {
  __typename?: 'SpeciesPeopleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** A single transport craft that has hyperdrive capability. */
export type Starship = Node & {
  __typename?: 'Starship';
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT: Maybe<Scalars['Int']['output']>;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: Maybe<Scalars['String']['output']>;
  /** The cost of this starship new, in galactic credits. */
  costInCredits: Maybe<Scalars['Float']['output']>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The number of personnel needed to run or pilot this starship. */
  crew: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  filmConnection: Maybe<StarshipFilmsConnection>;
  /** The class of this starships hyperdrive. */
  hyperdriveRating: Maybe<Scalars['Float']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The length of this starship in meters. */
  length: Maybe<Scalars['Float']['output']>;
  /** The manufacturers of this starship. */
  manufacturers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed: Maybe<Scalars['Int']['output']>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model: Maybe<Scalars['String']['output']>;
  /** The name of this starship. The common name, such as "Death Star". */
  name: Maybe<Scalars['String']['output']>;
  /** The number of non-essential people this starship can transport. */
  passengers: Maybe<Scalars['String']['output']>;
  pilotConnection: Maybe<StarshipPilotsConnection>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass: Maybe<Scalars['String']['output']>;
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipFilmConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipPilotConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type StarshipFilmsConnection = {
  __typename?: 'StarshipFilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type StarshipFilmsEdge = {
  __typename?: 'StarshipFilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

/** A connection to a list of items. */
export type StarshipPilotsConnection = {
  __typename?: 'StarshipPilotsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type StarshipPilotsEdge = {
  __typename?: 'StarshipPilotsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** A connection to a list of items. */
export type StarshipsConnection = {
  __typename?: 'StarshipsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<StarshipsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships: Maybe<Array<Maybe<Starship>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type StarshipsEdge = {
  __typename?: 'StarshipsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Starship>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  _ilike: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _like: InputMaybe<Scalars['String']['input']>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  _nilike: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<Scalars['String']['input']>>;
  _nlike: InputMaybe<Scalars['String']['input']>;
  _nsimilar: InputMaybe<Scalars['String']['input']>;
  _similar: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type SubscriptionUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** A single transport craft that does not have hyperdrive capability */
export type Vehicle = Node & {
  __typename?: 'Vehicle';
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity: Maybe<Scalars['Float']['output']>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: Maybe<Scalars['String']['output']>;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits: Maybe<Scalars['Float']['output']>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created: Maybe<Scalars['String']['output']>;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew: Maybe<Scalars['String']['output']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited: Maybe<Scalars['String']['output']>;
  filmConnection: Maybe<VehicleFilmsConnection>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** The length of this vehicle in meters. */
  length: Maybe<Scalars['Float']['output']>;
  /** The manufacturers of this vehicle. */
  manufacturers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed: Maybe<Scalars['Int']['output']>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model: Maybe<Scalars['String']['output']>;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name: Maybe<Scalars['String']['output']>;
  /** The number of non-essential people this vehicle can transport. */
  passengers: Maybe<Scalars['String']['output']>;
  pilotConnection: Maybe<VehiclePilotsConnection>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass: Maybe<Scalars['String']['output']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type VehicleFilmConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type VehiclePilotConnectionArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type VehicleFilmsConnection = {
  __typename?: 'VehicleFilmsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: Maybe<Array<Maybe<Film>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type VehicleFilmsEdge = {
  __typename?: 'VehicleFilmsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Film>;
};

/** A connection to a list of items. */
export type VehiclePilotsConnection = {
  __typename?: 'VehiclePilotsConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots: Maybe<Array<Maybe<Person>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
};

/** An edge in a connection. */
export type VehiclePilotsEdge = {
  __typename?: 'VehiclePilotsEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Person>;
};

/** A connection to a list of items. */
export type VehiclesConnection = {
  __typename?: 'VehiclesConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<VehiclesEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: Maybe<Scalars['Int']['output']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type VehiclesEdge = {
  __typename?: 'VehiclesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Maybe<Vehicle>;
};

export type Volume = {
  __typename?: 'Volume';
  cubic_feet: Maybe<Scalars['Int']['output']>;
  cubic_meters: Maybe<Scalars['Int']['output']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl: Maybe<Scalars['String']['output']>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']['input']>;
  _gt: InputMaybe<Scalars['timestamptz']['input']>;
  _gte: InputMaybe<Scalars['timestamptz']['input']>;
  _in: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['timestamptz']['input']>;
  _lte: InputMaybe<Scalars['timestamptz']['input']>;
  _neq: InputMaybe<Scalars['timestamptz']['input']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['uuid']['output'];
  name: Maybe<Scalars['String']['output']>;
  rocket: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['timestamptz']['output'];
  twitter: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Maybe<Scalars['Int']['output']>;
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Users_Max_Order_By>;
  min: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  rocket: InputMaybe<String_Comparison_Exp>;
  timestamp: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  Key = 'key',
  Or = 'or',
  Primary = 'primary',
  Unique = 'unique',
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id: InputMaybe<Scalars['uuid']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  rocket: InputMaybe<Scalars['String']['input']>;
  timestamp: InputMaybe<Scalars['timestamptz']['input']>;
  twitter: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  name: Maybe<Scalars['String']['output']>;
  rocket: Maybe<Scalars['String']['output']>;
  timestamp: Maybe<Scalars['timestamptz']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name: InputMaybe<Order_By>;
  rocket: InputMaybe<Order_By>;
  timestamp: InputMaybe<Order_By>;
  twitter: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  name: Maybe<Scalars['String']['output']>;
  rocket: Maybe<Scalars['String']['output']>;
  timestamp: Maybe<Scalars['timestamptz']['output']>;
  twitter: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name: InputMaybe<Order_By>;
  rocket: InputMaybe<Order_By>;
  timestamp: InputMaybe<Order_By>;
  twitter: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  rocket: InputMaybe<Order_By>;
  timestamp: InputMaybe<Order_By>;
  twitter: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id: InputMaybe<Scalars['uuid']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  rocket: InputMaybe<Scalars['String']['input']>;
  timestamp: InputMaybe<Scalars['timestamptz']['input']>;
  twitter: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']['input']>;
  _gt: InputMaybe<Scalars['uuid']['input']>;
  _gte: InputMaybe<Scalars['uuid']['input']>;
  _in: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['uuid']['input']>;
  _lte: InputMaybe<Scalars['uuid']['input']>;
  _neq: InputMaybe<Scalars['uuid']['input']>;
  _nin: InputMaybe<Array<Scalars['uuid']['input']>>;
};

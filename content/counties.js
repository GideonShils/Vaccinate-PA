const counties = [
  "Adams County",
  "Allegheny County",
  "Armstrong County",
  "Beaver County",
  "Bedford County",
  "Berks County",
  "Blair County",
  "Bradford County",
  "Bucks County",
  "Butler County",
  "Cambria County",
  "Cameron County",
  "Carbon County",
  "Centre County",
  "Chester County",
  "Clarion County",
  "Clearfield County",
  "Clinton County",
  "Columbia County",
  "Crawford County",
  "Cumberland County",
  "Dauphin County",
  "Delaware County",
  "Elk County",
  "Erie County",
  "Fayette County",
  "Forest County",
  "Franklin County",
  "Fulton County",
  "Greene County",
  "Huntingdon County",
  "Indiana County",
  "Jefferson County",
  "Juniata County",
  "Lackawanna County",
  "Lancaster County",
  "Lawrence County",
  "Lebanon County",
  "Lehigh County",
  "Luzerne County",
  "Lycoming County",
  "McKean County",
  "Mercer County",
  "Mifflin County",
  "Monroe County",
  "Montgomery County",
  "Montour County",
  "Northampton County",
  "Northumberland County",
  "Perry County",
  "Philadelphia County",
  "Pike County",
  "Potter County",
  "Schuylkill County",
  "Snyder County",
  "Somerset County",
  "Sullivan County",
  "Susquehanna County",
  "Tioga County",
  "Union County",
  "Venango County",
  "Warren County",
  "Washington County",
  "Wayne County",
  "Westmoreland County",
  "Wyoming County",
  "York County",
];

const countyCodes = [
  "adams",
  "allegheny",
  "armstrong",
  "beaver",
  "bedford",
  "berks",
  "blair",
  "bradford",
  "bucks",
  "butler",
  "cambria",
  "cameron",
  "carbon",
  "centre",
  "chester",
  "clarion",
  "clearfield",
  "clinton",
  "columbia",
  "crawford",
  "cumberland",
  "dauphin",
  "delaware",
  "elk",
  "erie",
  "fayette",
  "forest",
  "franklin",
  "fulton",
  "greene",
  "huntingdon",
  "indiana",
  "jefferson",
  "juniata",
  "lackawanna",
  "lancaster",
  "lawrence",
  "lebanon",
  "lehigh",
  "luzerne",
  "lycoming",
  "mckean",
  "mercer",
  "mifflin",
  "monroe",
  "montgomery",
  "montour",
  "northampton",
  "northumberland",
  "perry",
  "philadelphia",
  "pike",
  "potter",
  "schuylkill",
  "snyder",
  "somerset",
  "sullivan",
  "susquehanna",
  "tioga",
  "union",
  "venango",
  "warren",
  "washington",
  "wayne",
  "westmoreland",
  "wyoming",
  "york",
];

const countyPositions = {
  "Adams County": { lng: -91.2110065, lat: 39.9787786 },
  "Allegheny County": { lng: -79.9760405, lat: 40.4597204 },
  "Armstrong County": { lng: -101.3449139, lat: 34.9295608 },
  "Beaver County": { lng: -80.3709999, lat: 40.6916624 },
  "Bedford County": { lng: -78.5237447, lat: 40.0271453 },
  "Berks County": { lng: -75.9433305, lat: 40.4113762 },
  "Blair County": { lng: -78.3682329, lat: 40.4870748 },
  "Bradford County": { lng: -76.5264613, lat: 41.7746685 },
  "Bucks County": { lng: -75.1263909, lat: 40.3451668 },
  "Butler County": { lng: -79.92623988102099, lat: 40.9162435 },
  "Cambria County": { lng: -78.718852, lat: 40.4843583 },
  "Cameron County": { lng: -97.4134281, lat: 26.1291189 },
  "Carbon County": { lng: -75.7212917, lat: 40.8908468 },
  "Centre County": { lng: -77.7865722, lat: 40.9381735 },
  "Chester County": { lng: -75.7652424, lat: 39.9829308 },
  "Clarion County": { lng: -79.429169, lat: 41.1818771 },
  "Clearfield County": { lng: -78.4457422, lat: 40.9908706 },
  "Clinton County": { lng: -89.420064, lat: 38.5896187 },
  "Columbia County": { lng: -76.4191791, lat: 41.0389186 },
  "Crawford County": { lng: -80.1428967, lat: 41.6951179 },
  "Cumberland County": { lng: -77.2803933, lat: 40.1541581 },
  "Dauphin County": { lng: -76.8115168, lat: 40.398036 },
  "Delaware County": { lng: -75.4001639, lat: 39.9194117 },
  "Elk County": { lng: -78.626009, lat: 41.437362 },
  "Erie County": { lng: -80.14108845753915, lat: 42.1818728 },
  "Fayette County": { lng: -96.9559692, lat: 29.8381635 },
  "Forest County": { lng: -79.2640912, lat: 41.5329762 },
  "Franklin County": { lng: -95.21652077002003, lat: 33.16011905 },
  "Fulton County": { lng: -90.1845556, lat: 40.4714305 },
  "Greene County": { lng: -90.3898985, lat: 39.3573664 },
  "Huntingdon County": { lng: -78.0281185, lat: 40.3446332 },
  "Indiana County": { lng: -79.1262839, lat: 40.6424116 },
  "Jefferson County": { lng: -94.1704496, lat: 29.834772 },
  "Juniata County": { lng: -77.4300565, lat: 40.5368022 },
  "Lackawanna County": { lng: -75.6260271, lat: 41.4406084 },
  "Lancaster County": { lng: -76.2411283, lat: 40.08067 },
  "Lawrence County": { lng: -80.350071, lat: 41.001415 },
  "Lebanon County": { lng: -76.4626118, lat: 40.375713 },
  "Lehigh County": { lng: -75.6048728, lat: 40.6096215 },
  "Luzerne County": { lng: -75.9695233, lat: 41.1749635 },
  "Lycoming County": { lng: -77.0220348, lat: 41.3472688 },
  "McKean County": { lng: -78.5769879, lat: 41.8019737 },
  "Mercer County": { lng: -80.3014412, lat: 41.3334542 },
  "Mifflin County": { lng: -77.6215085, lat: 40.6099183 },
  "Monroe County": { lng: -90.1792484, lat: 38.2722313 },
  "Montgomery County": { lng: -95.5065944, lat: 30.301949 },
  "Montour County": { lng: -76.6615816, lat: 41.0289528 },
  "Northampton County": { lng: -75.3289302, lat: 40.7451356 },
  "Northumberland County": { lng: -76.6943741, lat: 40.8488473 },
  "Perry County": { lng: -89.3760499, lat: 38.0772859 },
  "Philadelphia County": { lng: -75.1326504, lat: 40.0114538 },
  "Pike County": { lng: -90.8538306, lat: 39.6108707 },
  "Potter County": { lng: -101.8776577, lat: 35.3683354 },
  "Schuylkill County": { lng: -76.2277971, lat: 40.6936632 },
  "Snyder County": { lng: -77.0909536, lat: 40.7615395 },
  "Somerset County": { lng: -79.0415528, lat: 39.9980022 },
  "Sullivan County": { lng: -76.5117017, lat: 41.4402556 },
  "Susquehanna County": { lng: -75.8170767, lat: 41.8218729 },
  "Tioga County": { lng: -77.254256, lat: 41.7741691 },
  "Union County": { lng: -89.2504793, lat: 37.4616454 },
  "Venango County": { lng: -79.7709417, lat: 41.3996112 },
  "Warren County": { lng: -79.2654452, lat: 41.8119602 },
  "Washington County": { lng: -96.3936114, lat: 30.2226352 },
  "Wayne County": { lng: -88.4197678, lat: 38.4251958 },
  "Westmoreland County": { lng: -79.4873204, lat: 40.2930159 },
  "Wyoming County": { lng: -76.019111, lat: 41.5179097 },
  "York County": { lng: -76.7008946, lat: 39.9067499 },
};

export default counties;

export { countyPositions, countyCodes };

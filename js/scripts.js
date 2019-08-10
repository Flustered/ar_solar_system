var spots = {
    0: {
        title: "The Sun",
        description: "The sun lies at the heart of the solar system, where it is by far the largest object. It holds 99.8 percent of the solar system's mass and is roughly 109 times the diameter of the Earth — about one million Earths could fit inside the sun. The sun is one of more than 100 billion stars in the Milky Way.",
        next: {
            id: 1,
            distance: "10m (57.91 million km)"
        },
        asset: "mercury/scene.gltf",
        runfile: "sun.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    1: {
        title: "Mercury",
        description: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System.",
        previous: {
            id: 0,
            distance: "10m (57.91 million km)"
        },
        next: {
            id: 2,
            distance: "10m (50 million km)"
        },
        asset: "mercury/scene.gltf",
        runfile: "mercury.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    2: {
        title: "Venus",
        description: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 Earth days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east).",
        previous: {
            id: 1,
            distance: "10m (57.91 million km)"
        },
        next: {
            id: 3,
            distance: "10m (261 million kilometers)"
        },
        asset: "mercury/scene.gltf",
        runfile: "venus.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    3: {
        title: "Earth",
        description: "The Earth rotates the sun every 365 days (year) and rotates in its axis every 24 hours (day). Its size is a little more than 12,000 kilometers in diameter. This planet is different form other planets as it maintains life on its surface. It has a moon.",
        previous: {
            id: 2,
            distance: ""
        },
        next: {
            id: 5,
            distance: ""
        },
        asset: "earth/scene.gltf",
        runfile: "earth.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    4: {
        title: "Our Moon",
        description: "",
        previous: {
            id: 3,
            distance: ""
        },
        next: {
            id: 5,
            distance: ""
        },
        asset: "moon/scene.gltf",
        runfile: "moon.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    5: {
        title: "Mars",
        description: "Mars takes 687 days to revolve around the sun. Its surface is covered with craters, volcanoes, and large canyons and it has a very cold atmosphere. It has two moons",
        previous: {
            id: 3,
            distance: ""
        },
        next: {
            id: 6,
            distance: ""
        },
        asset: "mars/scene.gltf",
        runfile: "mars.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    6: {
        title: "Jupiter",
        description: "Jupiter is the largest planet of the solar system as a diameter of 142,980 kilometers. It orbits the sun every 12 years.",
        previous: {
            id: 5,
            distance: ""
        },
        next: {
            id: 7,
            distance: ""
        },
        asset: "jupiter/scene.gltf",
        runfile: "jupiter.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    7: {
        title: "Saturn",
        description: "Saturn is a large planet as 120,536 kilometers. It orbits the sun in 12 years. It is well-known for its system of three rings, it has also 47 moons.",
        previous: {
            id: 6,
            distance: ""
        },
        next: {
            id: 8,
            distance: ""
        },
        asset: "saturn/scene.gltf",
        runfile: "saturn.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    8: {
        title: "Uranus",
        description: "Uranus rotates the sun in 84 years, its size is 51,118 kilometers in diameter. It is surrounded by a system of nine rings.",
        previous: {
            id: 7,
            distance: ""
        },
        next: {
            id: 9,
            distance: ""
        },
        asset: "uranus/scene.gltf",
        runfile: "uranus.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    9: {
        title: "Neptune",
        description: "Neptune's size is 49,500 kilometers in diameter. It orbits the sun every 165 years.",
        previous: {
            id: 8,
            distance: ""
        },
        next: {
            id: 10,
            distance: ""
        },
        asset: "neptune/scene.gltf",
        runfile: "neptune.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },
    10: {
        title: "Pluto",
        description: "Once the ninth planet from the sun, Pluto is unlike other planets in many respects. It is smaller than Earth's moon. Its orbit carries it inside the orbit of Neptune and then way out beyond that orbit. From 1979 until early 1999, Pluto had actually been the eighth planet from the sun.",
        previous: {
            id: 9,
            distance: ""
        },
        asset: "pluto/scene.gltf",
        runfile: "pluto.html",
        rotation: "0 0 0",
        scale: "1 1 1",
        position: "0 0 0"
    },

};

let mySpot = getUrlVars()['spot'];

if (!mySpot) {
    mySpot = 0;
}

function returnIframeSource() {
    return "content/" + spots[mySpot].runfile;
}

function returnSpotName() {
    return spots[mySpot].title;
}
function returnSpotDescription() {
    return spots[mySpot].description;
}

function returnSpotNumber() {
    return mySpot;
}


function loadIframe() {
    // getting value from localstorage

    //but this is not working.
    document.getElementById("frameHolder").src = returnIframeSource();
}



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}



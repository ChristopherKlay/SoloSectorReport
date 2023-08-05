// Settings & API
var system = {
    api: {
        key: '8437c6dca6f848cf93cb215f9e1b5cc9',
        root: 'https://www.bungie.net/Platform'
    }
}

// Main Storage
var data = {
    profile: {},
    statistic: {
        legend: {
            completed: 0,
            flawless: 0
        },
        master: {
            completed: 0,
            flawless: 0
        }
    },
    sectors: {
        "2571435846,1898610131": {
            name: "Aphelion's Rest: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_aphelions_rest.jpg"
        },
        "257143584,1898610132": {
            name: "Aphelion's Rest: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_aphelions_rest.jpg"
        },
        "628527323,660710120": {
            name: "Bay of Drowned Wishes: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_bay_of_drowned_wishes.jpg"
        },
        "628527324,660710127": {
            name: "Bay of Drowned Wishes: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_bay_of_drowned_wishes.jpg"
        },
        "3981864035,1648125538": {
            name: "Bunker E15: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-overhang.jpg"
        },
        "3981864036,1648125541": {
            name: "Bunker E15: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-overhang.jpg"
        },
        "457172845,4206916276": {
            name: "Chamber of Starlight: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_chamber_of_starlight.jpg"
        },
        "457172842,4206916275": {
            name: "Chamber of Starlight: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/dreaming_city_chamber_of_starlight.jpg"
        },
        "4044885801,912873274": {
            name: "Concealed Void: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-frost.jpg"
        },
        "4044885806,912873277": {
            name: "Concealed Void: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-frost.jpg"
        },
        "1956131625,2829206720": {
            name: "K1 Communion: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_communion.jpg"
        },
        "1956131630,2829206727": {
            name: "K1 Communion: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_communion.jpg"
        },
        "1525311377,184186578": {
            name: "K1 Crew Quarters: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_crew_quarters.jpg"
        },
        "1525311382,184186581": {
            name: "K1 Crew Quarters: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_crew_quarters.jpg"
        },
        "3229581104,567131519": {
            name: "K1 Logistic: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_logistics.jpg"
        },
        "3229581111,567131512": {
            name: "K1 Logistic: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_logistics.jpg"
        },
        "1174061505,3911969238": {
            name: "K1 Revelation: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_revelation.jpg"
        },
        "1174061510,3911969233": {
            name: "K1 Revelation: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/moon_k1_revelation.jpg"
        },
        "1962464162,1070981425": {
            name: "Perdition: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-shear.jpg"
        },
        "1962464165,1070981430": {
            name: "Perdition: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/europa-lost-sector-shear.jpg"
        },
        "2019961993": {
            name: "The Empty Tank: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/free_roam_tangled_shore.jpg"
        },
        "2019961998": {
            name: "The Empty Tank: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/free_roam_tangled_shore.jpg"
        },
        "4269987985,1163502296": {
            name: "The Conflux: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/nessus_the_conflux.jpg"
        },
        "4269987990,1163502303": {
            name: "The Conflux: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/nessus_the_conflux.jpg"
        },
        "283251609,3678847134": {
            name: "Metamorphosis: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/bayou_ls.jpg"
        },
        "283251614,3678847129": {
            name: "Metamorphosis: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/bayou_ls.jpg"
        },
        "212477858,480864721": {
            name: "Sepulcher: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/canal_ls.jpg"
        },
        "212477861,480864726": {
            name: "Sepulcher: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/canal_ls.jpg"
        },
        "1509764575,145221020": {
            name: "Extraction: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/gateway_ls.jpg"
        },
        "1509764568,145221019": {
            name: "Extraction: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/gateway_ls.jpg"
        },
        "3350278552,548616653": {
            name: "Excavation Site XII: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_excavation_site_xii.jpg"
        },
        "3350278559,548616650": {
            name: "Excavation Site XII: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_excavation_site_xii.jpg"
        },
        "55186256": {
            name: "Skydock IV: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/skydock_iv.jpg"
        },
        "55186263": {
            name: "Skydock IV: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/skydock_iv.jpg"
        },
        "1344654779,3253890600": {
            name: "The Quarry: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_the_quarry.jpg"
        },
        "1344654780,3253890607": {
            name: "The Quarry: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_the_quarry.jpg"
        },
        "2310698352,3094493727": {
            name: "Veles Labyrinth: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome-lost-sector-dry-sea.jpg"
        },
        "2310698359,3094493720": {
            name: "Veles Labyrinth: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome-lost-sector-dry-sea.jpg"
        },
        "2504276276,2936791995": {
            name: "Exodus Garden 2A: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome-lost-sector-graveyard.jpg"
        },
        "2504276275,2936791996": {
            name: "Exodus Garden 2A: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/cosmodrome-lost-sector-graveyard.jpg"
        },
        "144485117,1905792146": {
            name: "Scavenger's Den: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_scavengers_den.jpg"
        },
        "144485114,1905792149": {
            name: "Scavenger's Den: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/edz_lost_sector_scavengers_den.jpg"
        },
        "584726931": {
            name: "Thrilladrome: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_thrilladrome.jpg"
        },
        "584726932": {
            name: "Thrilladrome: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_thrilladrome.jpg"
        },
        "2983905030": {
            name: "Gilded Precept: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_gilded_precept.jpg"
        },
        "2983905025": {
            name: "Gilded Precept: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_gilded_precept.jpg"
        },
        "1869786719": {
            name: "Hydroponics Delta: Master",
            difficulty: "master",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_hydroponics_delta.jpg"
        },
        "1869786712": {
            name: "Hydroponics Delta: Legend",
            difficulty: "legend",
            header: "https://www.bungie.net/img/destiny_content/pgcr/neomuna_lost_sector_hydroponics_delta.jpg"
        }
    }
}

function performSearch(e) {
    // Disable & hide search
    e.search.disabled = true

    // Hide sector overview
    document.querySelector('sectors').style.display = 'none'

    // Get data
    searchBungieUser(e)
}

async function getProfileData(membershipId, membershipType) {
    let response = await fetch(system.api.root + '/Destiny2/' + membershipType + '/Profile/' + membershipId + '/?&components=100,200', {
        "headers": {
            "x-api-key": system.api.key
        }
    })
    let json = await response.json()

    console.log(json)

    // Get profile data
    data.profile.name = json.Response.profile.data.userInfo.bungieGlobalDisplayName
    data.profile.tag = json.Response.profile.data.userInfo.bungieGlobalDisplayNameCode
    data.profile.characters = json.Response.profile.data.characterIds
    data.profile.platform = json.Response.profile.data.userInfo.membershipType
    data.profile.emblem = json.Response.characters.data[Object.keys(json.Response.characters.data)[0]].emblemBackgroundPath
    data.profile.emblemHash = json.Response.characters.data[Object.keys(json.Response.characters.data)[0]].emblemHash

    // Set user data to header
    document.querySelector('header').style.backgroundImage = 'url("' + await fetchFullEmblem(data.profile.emblemHash) + '")'

    // Request activity history for each character
    var sectorData = []
    for (var c = 0; c < data.profile.characters.length; c++) {
        var requestData = await fetchSectorHistory(membershipId, data.profile.platform, data.profile.characters[c])
        sectorData.push.apply(sectorData, requestData)
    }

    // Loop runs
    for (var i = sectorData.length - 1; i >= 0; i--) {
        // Check if solo & completed
        if (sectorData[i].values.playerCount.basic.value == '1' && sectorData[i].values.completed.basic.value == '1') {
            // Loop sectors
            for (sector in data.sectors) {
                if (sector.includes(sectorData[i].activityDetails.directorActivityHash)) {
                    // Cleared Sector
                    data.statistic[data.sectors[sector].difficulty].completed = data.statistic[data.sectors[sector].difficulty].completed + 1
                    data.sectors[sector].completed = typeof data.sectors[sector].completed !== 'undefined' ? data.sectors[sector].completed + 1 : 1

                    if (sectorData[i].values.deaths.basic.value == 0) {
                        // Flawless
                        data.statistic[data.sectors[sector].difficulty].flawless = data.statistic[data.sectors[sector].difficulty].flawless + 1
                        data.sectors[sector].flawless = typeof data.sectors[sector].flawless !== 'undefined' ? data.sectors[sector].flawless + 1 : 1

                        // Clear times (Flawless)
                        if (!data.sectors[sector].fastestFlawless || sectorData[i].values.timePlayedSeconds.basic.value < data.sectors[sector].fastest) {
                            data.sectors[sector].fastestFlawless = sectorData[i].values.timePlayedSeconds.basic.value
                        }
                    } else {
                        // Clear times (Flawed)
                        if (!data.sectors[sector].fastest || sectorData[i].values.timePlayedSeconds.basic.value < data.sectors[sector].fastest) {
                            data.sectors[sector].fastest = sectorData[i].values.timePlayedSeconds.basic.value
                        }
                    }

                    // General stats
                    data.sectors[sector].kills = typeof data.sectors[sector].kills !== 'undefined' ? data.sectors[sector].kills + sectorData[i].values.kills.basic.value : sectorData[i].values.kills.basic.value
                    data.sectors[sector].deaths = typeof data.sectors[sector].deaths !== 'undefined' ? data.sectors[sector].deaths + sectorData[i].values.deaths.basic.value : sectorData[i].values.deaths.basic.value
                    data.sectors[sector].timeTotal = typeof data.sectors[sector].timeTotal !== 'undefined' ? data.sectors[sector].timeTotal + sectorData[i].values.timePlayedSeconds.basic.value : sectorData[i].values.timePlayedSeconds.basic.value

                    // Highest score
                    if (!data.sectors[sector].highscore || sectorData[i].values.score.basic.value > data.sectors[sector].highscore) {
                        data.sectors[sector].highscore = sectorData[i].values.score.basic.value
                    }

                    // Remove from results
                    sectorData.splice(i, 1)

                    break
                }
            }
        } else {
            sectorData.splice(i, 1)
        }
    }

    // Generate overview
    generateSectors(data)

    // Log full player data
    console.log(data)
}

async function searchBungieUser(id) {
    let response = await fetch(system.api.root + '/Destiny2/SearchDestinyPlayer/-1/' + encodeURIComponent(id.search.value) + '/', {
        "headers": {
            "x-api-key": system.api.key
        }
    })
    let json = await response.json()

    // Check if ID exists
    if (json.Response && json.Response.length > 0) {
        getProfileData(json.Response[0].membershipId, json.Response[0].membershipType)
    } else {
        alert('No user found.')
        document.querySelector('header').style.background = 'none'
        id.search.disabled = false
        id.style.display = 'block'
    }
}

async function fetchSectorHistory(membershipId, membershipType, characterId, count = 250) {
    let response = await fetch(system.api.root + '/Destiny2/' + membershipType + '/Account/' + membershipId + '/Character/' + characterId + '/Stats/Activities/?mode=87&count=' + count + '&page=0', {
        "headers": {
            "x-api-key": system.api.key,
        }
    })
    let json = await response.json()
    return json.Response.activities
}

async function fetchActivityData(hash) {
    let response = await fetch(system.api.root + '/Destiny2/Manifest/DestinyActivityDefinition/' + hash + '/', {
        "headers": {
            "x-api-key": system.api.key
        }
    })
    let json = await response.json()
    return json.Response.activities
}

async function fetchFullEmblem(hash) {
    let response = await fetch(system.api.root + '/Destiny2/Manifest/DestinyInventoryItemDefinition/' + hash + '/', {
        "headers": {
            "x-api-key": system.api.key
        }
    })
    let json = await response.json()
    return 'https://bungie.net' + json.Response.secondarySpecial
}

function generateSectors(data) {
    // Loop generate sectors
    for (sector in data.sectors) {
        var entry = document.createElement('entry')
        entry.data = {
            name: data.sectors[sector].name,
            completed: data.sectors[sector].completed || 0,
            flawless: data.sectors[sector].flawless || 0,
            fastest: data.sectors[sector].fastest || "None",
            fastestFlawless: data.sectors[sector].fastestFlawless || "None",
            header: data.sectors[sector].header,
            kills: data.sectors[sector].kills || '—',
            deaths: data.sectors[sector].deaths || '—',
            highscore: data.sectors[sector].highscore || '—',
            timeTotal: data.sectors[sector].timeTotal || '—'
        }

        entry.innerHTML = `
            <header style="background-image: url('` + entry.data.header + `');">
                ` + entry.data.name + `
            </header>
            <content>
                <row>
                    <cell>STATS</cell>
                    <cell>CLEARS</cell>
                    <cell>FASTEST</cell>
                </row>
                <hr>
                <row>
                    <cell>Runs</cell>
                    <cell>` + entry.data.completed + `</cell>
                    <cell>` + formatTime(entry.data.fastest) + `</cell>
                </row>
                <row>
                    <cell>Flawless</cell>
                    <cell>` + entry.data.flawless + `</cell>
                    <cell>` + formatTime(entry.data.fastestFlawless) + `</cell>
                </row>
                <hr>
                <row>
                    <cell>GENERAL</cell>
                </row>
                <hr>
                <row>
                    <cell>Kills</cell>
                    <cell>` + entry.data.kills + `</cell>
                </row>
                <row>
                    <cell>Deaths</cell>
                    <cell>` + entry.data.deaths + `</cell>
                </row>
                <row>
                    <cell>Score</cell>
                    <cell>` + entry.data.highscore + `</cell>
                </row>
                <row>
                    <cell>Time</cell>
                    <cell>` + formatTime(entry.data.timeTotal) + `</cell>
                </row>
            </content>`

        document.body.querySelector('sectors').append(entry)
    }

    // Show sector overview
    document.querySelector('sectors').style.display = 'flex'

    // Re-enable search
    document.querySelector('#search').disabled = false
}

function formatTime(t) {
    if (t > 0) {
        var h = Math.floor(t / 3600)
        var m = Math.floor(t % 3600 / 60)
        var s = Math.floor(t % 3600 % 60).toString().padStart(2, '0')

        if (h < 1) {
            return m + 'm ' + s + 's'
        } else {
            m = m.toString().padStart(2, '0')
            return h + 'h ' + m + 'm ' + s + 's'
        }
    } else {
        return '—'
    }
}
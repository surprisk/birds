# How does the birdsAPI works ?

First of all you can include the token authenticator inside the header of the request like this : 

```
x-access-token: YOUR_TOKEN
```

if you use this way, you can remove "token" field inside the body parameter !

You can try our API at this link : 
```
https://www.samuel-brosse/birdsAPI/
```

## Auth 
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/auth/signup | Sign Up  | [JSON](#signup-and-login) |
| POST | /birdsAPI/auth/login | Log In  | [JSON](#signup-and-login) |

## Birds
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/birds/ | Create a bird  | [JSON](#create-a-bird) |
| GET | /birdsAPI/birds/{id} | Read a bird  |  |
| PUT | /birdsAPI/birds/{id} | Update a bird  | [JSON](#update-a-bird) |
| DEL | /birdsAPI/birds/{id} | Delete a bird  |  |
| GET | /birdsAPI/birds/ | Get all birds  |  |
| GET | /birdsAPI/birds/{id}/species | Add a specie to a bird  | [JSON](#add-and-remove-a-specie-to-a-bird) |
| GET | /birdsAPI/birds/{id}/species | Remove a specie to a bird  | [JSON](#add-and-remove-a-specie-to-a-bird) |
| GET | /birdsAPI/birds/{id}/habitats | Add a habitat to a bird  | [JSON](#add-and-remove-an-habitat-to-a-bird) |
| GET | /birdsAPI/birds/{id}/habitats | Remove a habitat to a bird  | [JSON](#add-and-remove-an-habitat-to-a-bird) |
| GET | /birdsAPI/birds/{id}/overviews | Add a overview to a bird  | [JSON](#add-and-remove-an-overview-to-a-bird) |
| GET | /birdsAPI/birds/{id}/overviews | Remove a overview to a bird  | [JSON](#add-and-remove-an-overview-to-a-bird) |
| GET | /birdsAPI/birds/{id}/songs | Add a song to a bird  | [JSON](#add-and-remove-a-song-to-a-bird) |
| GET | /birdsAPI/birds/{id}/songs | Remove a song to a bird  | [JSON](#add-and-remove-a-song-to-a-bird) |

## Species
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/species/ | Create a specie | [JSON](#create-a-specie) |
| GET | /birdsAPI/species/{id} | Read a specie |  |
| PUT | /birdsAPI/species/{id} | Update a specie | [JSON](#update-a-specie) |
| DEL | /birdsAPI/species/{id} | Delete a specie |  |
| GET | /birdsAPI/species/ | Get all species |  |

## Habitats
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/habitats/ | Create an habitat | [JSON](#create-an-habitat) |
| GET | /birdsAPI/habitats/{id} | Read an habitat |  |
| PUT | /birdsAPI/habitats/{id} | Update an habitat | [JSON](#update-an-habitat) |
| DEL | /birdsAPI/habitats/{id} | Delete an habitat |  |
| GET | /birdsAPI/habitats/ | Get all habitats  |  |

## Overviews
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/overviews/ | Create an overview | [JSON](#create-an-overview) |
| GET | /birdsAPI/overviews/{id} | Read an overview |  |
| PUT | /birdsAPI/overviews/{id} | Update an overview | [JSON](#update-an-overview) |
| DEL | /birdsAPI/overviews/{id} | Delete an overview |  |
| GET | /birdsAPI/overviews/ | Get all overviews  |  |

## Songs
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/songs/ | Create a song | [JSON](#create-a-song) |
| GET | /birdsAPI/songs/{id} | Read a song |  |
| PUT | /birdsAPI/songs/{id} | Update a song | [JSON](#update-a-song) |
| DEL | /birdsAPI/songs/{id} | Delete a song |  |
| GET | /birdsAPI/songs/ | Get all songs |  |

# JSON Samples

## Signup and Login

```
{
  "username":"username",
  "password":"Password",
}
```

## Create a bird
```
{
    "name": "pica pica",
    "commonName": "magpie", 
    "description": "Magpie is a bird which has black, white and metalic blue color",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Update a bird
```
{
    "description": "Magpie is one of the most intelligent birds"
    "token": YOUR_CONNECTION_TOKEN
}
```

## Add and Remove a specie to a bird
```
{
    "specie": id_of_an_existing_specie,
    "token": YOUR_CONNECTION_TOKEN
}
```

## Add and Remove a habitat to a bird
```
{
    "habitat": id_of_an_existing_habitat,
    "token": YOUR_CONNECTION_TOKEN
}
```

## Add and Remove a song to a bird
```
{
    "song": id_of_an_existing_song,
    "token": YOUR_CONNECTION_TOKEN
}
```

## Add and Remove an overview to a bird
```
{
    "overview": id_of_an_existing_overview,
    "token": YOUR_CONNECTION_TOKEN
}
```


## Create a specie
```
{
  "description": "Divided into 69 families, passerines are called songbirds, and have complex muscles to control their syrinx, which is an organ located at the bottom of the trachea that allows them to vocalize. The song of the nightingale is the most edifying example. These birds, mostly arboreal, are         anisodactyl. That is to say that they have four fingers, three of which point forward, and the last one backward. The leg muscles are shaped to lock in place when the birds perch, to prevent them from falling off while sleeping. Most passerines have ten primary remiges, fourteen cervical vertebrae, and a tail of twelve feathers. They also have a naked uropygial gland. Their livery can be very discreet like that of the wren, or very colorful like that of the Gould's diamond.",
    "name": "Passeriforms",
    "commonName": "Passerines",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Update a specie
```
{
    "name": "Passériformes(name in french)",
    "commonName": "Passereaux(name in french)",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Create an habitat
```
{
    "name": "forest",
    "food": "bugs",
    "weather": "mild climat",
    "type": "not urbanized",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Update an habitat
```
{
    "name": "tropical forest",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Create an overview
```
{
    "name": "Mapgie overview 1",
    "path": "./uploads/images",
    "name": "gangOfMagpie",
    "extension": "jpg",
    "author": "Patrick",
    "source": "Instagram",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Update an overview
```
{
    "source": "Instagram profil : @PatrickTakesBirdsPics",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Create a song
```
{
    "name": "Magpie song",
    "path": "./uploads/songs/",
    "filename": "magpieSinging",
    "extension": ".wav",
    "source": "Youtube",
    "token": YOUR_CONNECTION_TOKEN
}
```

## Update a song
```
{
    "name": "Magpie song 1",
    "path": "./uploads/songs/",
    "filename": "magpieSinging1",
    "extension": ".wav",
    "source": "Youtube but on Patrick's channel",
    "token": YOUR_CONNECTION_TOKEN
}
```

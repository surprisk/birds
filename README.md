# How does the birdsAPI works ?

## Auth 
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/auth/signup | Sign Up  | [JSON](#Sign Up -> /birdsAPI/auth/signup) |
| POST | /birdsAPI/auth/login | Log In  | [JSON](#Link) |

## Birds
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/birds/ | Create a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id} | Read a bird  |  |
| PUT | /birdsAPI/birds/{id} | Update a bird  | [JSON](#Link) |
| DEL | /birdsAPI/birds/{id} | Delete a bird  |  |
| GET | /birdsAPI/birds/ | Get all birds  |  |
| GET | /birdsAPI/birds/{id}/species | Add a specie to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/species | Remove a specie to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/habitats | Add a habitat to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/habitats | Remove a habitat to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/overviews | Add a overview to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/overviews | Remove a overview to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/songs | Add a song to a bird  | [JSON](#Link) |
| GET | /birdsAPI/birds/{id}/songs | Remove a song to a bird  | [JSON](#Link) |

## Species
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/species/ | Create a specie | [JSON](#Link) |
| GET | /birdsAPI/species/{id} | Read a specie |  |
| PUT | /birdsAPI/species/{id} | Update a specie | [JSON](#Link) |
| DEL | /birdsAPI/species/{id} | Delete a specie |  |
| GET | /birdsAPI/species/ | Get all species |  |

## Habitats
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/habitats/ | Create an habitat | [JSON](#Link) |
| GET | /birdsAPI/habitats/{id} | Read an habitat |  |
| PUT | /birdsAPI/habitats/{id} | Update an habitat | [JSON](#Link) |
| DEL | /birdsAPI/habitats/{id} | Delete an habitat |  |
| GET | /birdsAPI/habitats/ | Get all habitats  |  |

## Overviews
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/overviews/ | Create an overview | [JSON](#Link) |
| GET | /birdsAPI/overviews/{id} | Read an overview |  |
| PUT | /birdsAPI/overviews/{id} | Update an overview | [JSON](#Link) |
| DEL | /birdsAPI/overviews/{id} | Delete an overview |  |
| GET | /birdsAPI/overviews/ | Get all overviews  |  |

## Songs
| Method  | url | description | Sample JSON request
| :---:  | :--- | :--- | :---: | 
| POST | /birdsAPI/songs/ | Create a song | [JSON](#Link) |
| GET | /birdsAPI/songs/{id} | Read a song |  |
| PUT | /birdsAPI/songs/{id} | Update a song | [JSON](#Link) |
| DEL | /birdsAPI/songs/{id} | Delete a song |  |
| GET | /birdsAPI/songs/ | Get all songs |  |

# JSON Samples

## Sign Up -> /birdsAPI/auth/signup

## Log in -> /birdsAPI/auth/login

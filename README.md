# A JSON API for LinkCat

LinkCat (http://www.linkcat.info/cgi-bin/koha/opac-main.pl) does not seem to have an API so here is one that does it via screen scraping.

### API Endpoints

#### Search

    GET /search

##### Parameters

Name | Type | Description
-----|------|--------------
`q`|`string` | A query parameter to search by

##### Request

``` bash
curl http://www.example.com
```

##### Response

``` json
{
}
```

#### Items

    GET /items/:id

##### Parameters

Name | Type | Description
-----|------|--------------
`id`|`string` | The ID of the item

##### Request

``` bash
curl http://www.example.com
```

##### Response

``` json
{
}
```



### Setup

1. Have a running node.js environment
2. Clone this repo
3. `cd` into repo
4. `npm install`
5. `node index.js`
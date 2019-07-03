# Drupal Use jsonapi demo

### Api Root Path

-   setting environment.ts
    -   line 8 change path `jsonapi_url: 'http://contenta.lshi.docroot7.drupalagile.com/api/'`

### Api Setting cache
- articles.component.ts  
    - line 22. change cache time live value/Seconds (Default 'ttl:20')
- app.module.ts
    - line 39-40. Default open cache(`cache_prerequests: true cachestore_support: true`) , we can set `cache_prerequests: false cachestore_support: false` to disabled cache.

# Drupal Use jsonapi demo

### Api Root Path

-   setting environment.ts
    -   line 8
        `jsonapi_url: 'http://contenta.lshi.docroot7.drupalagile.com/api/'`

- setting cache
    - articles.service.ts 
        - line 19. change ttl value (Default value is '1')
    - app.module.ts
        - line 39-40. Default (cache_prerequests: true cachestore_support: true) open cache, we can set false to disabled cache.

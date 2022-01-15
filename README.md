# ArchJS
a promise based ajax replica for sending http request to server

## how to use
download Archjs from gihub and reference in your html
```html
<script src="path/to/arch.js></script>
```

you can now send http request thus

```javascript

const http = new Arch();
http.req("GET", {
url: "store.json",
contentType: "application/json"
})
.then(res=>{
console.log(res);
})
```
